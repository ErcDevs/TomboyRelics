import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ items: [] }),
  getters: {
    totalItems: (state) => state.items.reduce((s, i) => s + i.quantity, 0),
    totalPrice: (state) => state.items.reduce((s, i) => s + i.price * i.quantity, 0),
  },
  actions: {
    addToCart(p) {
      const existing = this.items.find((i) => i.id === p.id)
      existing ? existing.quantity++ : this.items.push({ ...p, quantity: 1 })
    },
    removeItem(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    clear() {
      this.items = []
    },
  },
})
