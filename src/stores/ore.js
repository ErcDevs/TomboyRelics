// src/stores/ore.js — NEW ORE PRODUCT LINE
import { defineStore } from 'pinia'

export const useOreStore = defineStore('ore', {
  state: () => ({
    items: [
      // Add your high-grade ore products here
      {
        id: 1,
        name: 'Tomboy Mine High-Grade Gold Ore Specimen',
        price: 175,
        image: '/ore-1.jpg',
        desc: 'Hand-selected specimen from the richest vein in Savage Basin. Visible gold flecks.',
        sold: false,
        extraImages: ['/ore-1a.jpg', '/ore-1b.jpg', '/ore-1c.jpg']
      },
      // Add more ore items...
    ],
    cart: []
  }),
  getters: {
    total: (state) => state.cart.reduce((sum, item) => sum + item.price, 0)
  },
  actions: {
    addToCart(item) {
      this.cart.push({ ...item })
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
    },
    clearCart() {
      this.cart = []
    }
  }
})