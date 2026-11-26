// src/stores/cart.js — one cart for the whole store.
// One-of-a-kind specimens can be added once; items with `stock` (bags of
// concentrate) can be added up to the number still available.
import { defineStore } from 'pinia'
import { ORE, findOre } from '@/data/ore'

const KEY = 'tomboy-cart-v2'

export const useCartStore = defineStore('cart', {
  state: () => ({
    qty: JSON.parse(localStorage.getItem(KEY) || '{}'), // { id: quantity }
    soldQty: {}, // { id: quantity already paid for in Square }
  }),
  getters: {
    items: (s) =>
      Object.entries(s.qty)
        .map(([id, q]) => ({ ...findOre(id), qty: q }))
        .filter((i) => i.id),
    count() {
      return this.items.reduce((n, i) => n + i.qty, 0)
    },
    subtotal() {
      return this.items.reduce((sum, i) => sum + i.price * i.qty, 0)
    },
    ids: (s) => Object.entries(s.qty).flatMap(([id, q]) => Array(q).fill(Number(id))),
    has: (s) => (id) => !!s.qty[id],
    // How many more of this item can be bought.
    left: (s) => (id) => {
      const o = findOre(id)
      if (!o || o.sold) return 0
      return Math.max(0, (o.stock ?? 1) - (s.soldQty[o.id] || 0))
    },
    isSold() {
      return (id) => this.left(id) === 0
    },
    available() {
      return ORE.filter((o) => !this.isSold(o.id))
    },
  },
  actions: {
    save() {
      localStorage.setItem(KEY, JSON.stringify(this.qty))
    },
    setQty(id, q) {
      id = Number(id)
      q = Math.min(Math.max(0, Math.floor(q)), this.left(id))
      if (q > 0) this.qty[id] = q
      else delete this.qty[id]
      this.save()
    },
    add(id, q = 1) {
      this.setQty(id, (this.qty[id] || 0) + q)
    },
    remove(id) {
      this.setQty(id, 0)
    },
    clear() {
      this.qty = {}
      this.save()
    },
    applySold(soldQty) {
      this.soldQty = soldQty || {}
      for (const id of Object.keys(this.qty)) this.setQty(id, this.qty[id])
    },
    async loadSold() {
      try {
        const r = await fetch('/api/sold')
        if (!r.ok) return
        const data = await r.json()
        this.applySold(data.soldQty)
      } catch {
        /* offline or local dev without functions: ignore */
      }
    },
  },
})
