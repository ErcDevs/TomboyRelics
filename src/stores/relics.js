// src/stores/relics.js
import { defineStore } from 'pinia'

export const useRelicsStore = defineStore('relics', {
  state: () => ({
    items: [
      {
        id: 1,
        name: 'High-Grade Zinc Ore Bar',
        price: 45,
        image: '/assets/zinc-bar.jpg',
        desc: 'Savage Basin extract, 1890s purity',
        ebay: 'https://ebay.com/your-zinc-listing',
        sold: false,
      },
      {
        id: 2,
        name: "Beaver Pelt Miner's Hat",
        price: 120,
        image: '/assets/beaver-hat.png',
        desc: 'Tomboy original, weather-worn relic',
        ebay: 'https://ebay.com/your-hat-listing',
        sold: false,
      },
      {
        id: 3,
        name: 'Desilvering Kettle',
        price: 80,
        image: '/assets/kettle.jpg',
        desc: 'Historic ore processor from the mine',
        ebay: 'https://ebay.com/your-kettle-listing',
        sold: false,
      },
      {
        id: 4,
        name: 'Desilvering Kettle',
        price: 80,
        image: '/assets/kettle.jpg',
        desc: 'Historic ore processor from the mine',
        ebay: 'https://ebay.com/your-kettle-listing',
        sold: false,
      },
      {
        id: 5,
        name: 'Desilvering Kettle',
        price: 80,
        image: '/assets/kettle.jpg',
        desc: 'Historic ore processor from the mine',
        ebay: 'https://ebay.com/your-kettle-listing',
        sold: false,
      },
      {
        id: 6,
        name: 'Desilvering Kettle',
        price: 80,
        image: '/assets/kettle.jpg',
        desc: 'Historic ore processor from the mine',
        ebay: 'https://ebay.com/your-kettle-listing',
        sold: false,
      },
      // ← Add more relics here as you photograph/list them on eBay
    ],
    cart: [], // ← will hold full relic objects when added
  }),

  getters: {
    // Reactive total — updates automatically in templates
    total: (state) =>
      state.cart.reduce((sum, item) => sum + item.price, 0),

    // Handy for cart badge
    cartCount: (state) => state.cart.length,

    // Keep your original filter if you ever want a "under $100" page
    filteredByPrice: (state) => (maxPrice) =>
      state.items.filter((item) => item.price <= maxPrice),
  },

  actions: {
    addToCart(relic) {
      this.cart.push({ ...relic }) // spread to avoid reference issues
    },

    removeFromCart(relicId) {
      this.cart = this.cart.filter((item) => item.id !== relicId)
    },

    clearCart() {
      this.cart = []
    },
  },
})