// src/stores/relics.js — FINAL WITH MULTIPLE IMAGES
import { defineStore } from 'pinia'

export const useRelicsStore = defineStore('relics', {
  state: () => ({
    items: [
      // Example — add your real relics with extraImages
      {
        id: 1,
        name: 'Authentic Assay Cupel',
        price: 35,
        image: '/relicImages/gridThumbs/1main.jpeg',
        desc: 'Original fired Cupel from the Tomboy Assayers office!  Cupel has been fired and contains the original oxidized collector metals from the cupelation process.  Heavy sample! ',
        sold: false,
        category: 'relics',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
          '/relicImages/productImages/1.1.jpeg',
          '/relicImages/productImages/1.2.jpeg',
          '/relicImages/productImages/1.3.jpeg'
        ]
      },
      {
        id: 2,
        name: 'Desilvering Kettle',
        price: 436000,
        image: '/relicImages/gridThumbs/3main.jpeg',
        desc: 'HUGE discovery on November 1st 2025!!  The original desilvering kettle was unearthed making it the only known intact desilvering kettle from the Tomboy smelter! This is the original delivering kettle from the mine and is a museum specimen.  The kettle was unearthed with the silver and gold plates still intact, which are currently being assayed!  Kettle still has 50 1 oz dimples intact',
        sold: false,
        category: 'relics',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
          '/relicImages/productImages/3.1.jpeg',
          '/relicImages/productImages/3.2.jpeg',
          
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