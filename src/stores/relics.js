// src/stores/relics.js — FINAL WITH MULTIPLE IMAGES
import { defineStore } from 'pinia'

export const useRelicsStore = defineStore('relics', {
  state: () => ({
    items: [
      // Example — add your real relics with extraImages
      {
        id: 1,
        name: 'Authentic Assay Cupel',
        price: 45,
        image: '/relicImages/gridThumbs/1main.jpeg',
        desc: 'Original fired Cupel from the Tomboy Assayers office!  Cupel has been fired and contains the original oxidized collector metals from the cupelation process.  Heavy sample! ',
        sold: false,
        category: 'relics',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
          '/relicImages/productImages/1.1.jpg',
          '/relicImages/productImages/1.2.jpg',
          '/relicImages/productImages/1.3.jpg'
        ]
      },
      // Add all your relics like this...
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