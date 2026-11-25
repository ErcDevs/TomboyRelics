// src/stores/cart.js — one cart for the whole store. Every specimen is
// one-of-a-kind, so the cart holds item ids (quantity is always 1).
import { defineStore } from 'pinia'
import { ORE, findOre } from '@/data/ore'

const KEY = 'tomboy-cart'

export const useCartStore = defineStore('cart', {
  state: () => ({
    ids: JSON.parse(localStorage.getItem(KEY) || '[]'),
    soldIds: [],
  }),
  getters: {
    items: (s) => s.ids.map(findOre).filter(Boolean),
    count() {
      return this.items.length
    },
    subtotal() {
      return this.items.reduce((sum, i) => sum + i.price, 0)
    },
    has: (s) => (id) => s.ids.includes(Number(id)),
    isSold: (s) => (id) => s.soldIds.includes(Number(id)) || !!findOre(id)?.sold,
    available() {
      return ORE.filter((o) => !this.isSold(o.id))
    },
  },
  actions: {
    save() {
      localStorage.setItem(KEY, JSON.stringify(this.ids))
    },
    add(id) {
      id = Number(id)
      if (!this.ids.includes(id) && !this.isSold(id)) this.ids.push(id)
      this.save()
    },
    remove(id) {
      this.ids = this.ids.filter((i) => i !== Number(id))
      this.save()
    },
    clear() {
      this.ids = []
      this.save()
    },
    // Ask the server which items have been paid for in Square, so sold
    // pieces disappear from the shop automatically.
    async loadSold() {
      try {
        const r = await fetch('/api/sold')
        if (!r.ok) return
        const { sold } = await r.json()
        this.soldIds = sold || []
        this.ids = this.ids.filter((i) => !this.isSold(i))
        this.save()
      } catch {
        /* offline or local dev without functions: ignore */
      }
    },
  },
})
