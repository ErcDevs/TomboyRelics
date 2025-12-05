// src/stores/ore.js — NEW ORE PRODUCT LINE
import { defineStore } from 'pinia'

export const useOreStore = defineStore('ore', {
  state: () => ({
    items: [
      // Add your high-grade ore products here
     
      {
        id: 1,
        name: 'Tomboy Mine High-Grade Peacock Ore Specimen',
        price: 175,
        image: '/oreImages/gridThumbs/1main.jpeg',
        desc: 'Hand-selected specimen from the richest vein in Savage Basin. Very rare ultra pure calchopyrite specimen.',
        sold: false,
        extraImages: ['/oreImages/productImages/1.1', '/oreImages/productImages/1.2'],
        category: 'ore',
        reservedUntil: null,     // timestamp when reservation expires (null = available)
        reservedBy: null         // optional: session ID or "someone"
      },
      {
        id: 2,
        name: 'Tomboy Mine High-Grade Silver Ore Specimen',
        price: 175,
        image: '/oreImages/gridThumbs/2main.jpeg',
        desc: 'Hand-selected specimen, rich in silver, galena, and calchopyrite.',
        sold: false,
        extraImages: ['/oreImages/productImages/2.1', '/oreImages/productImages/2.2','/oreImages/productImages/2.3'],
        category: 'ore',
        reservedUntil: null,     // timestamp when reservation expires (null = available)
        reservedBy: null         // optional: session ID or "someone"
      },
      {
        id: 3,
        name: 'Tomboy Mine High-Grade Hard Rock Gold Ore Specimen',
        price: 175,
        image: '/oreImages/gridThumbs/3main.jpeg',
        desc: 'Hand-selected specimen with visible gold flecks in a micro vein of calchopyrite.',
        sold: false,
        extraImages: ['/oreImages/productImages/3.1', '/oreImages/productImages/3.2'],
        category: 'ore',
        reservedUntil: null,     // timestamp when reservation expires (null = available)
        reservedBy: null         // optional: session ID or "someone"
      },
      {
        id: 4,
        name: 'Tomboy Mine High-Grade Sulfides, 200 grams',
        price: 175,
        image: '/oreImages/gridThumbs/4main.jpeg',
        desc: 'Super rich high grade concentrates from our shaker table!  Concentrates contain free-mill silver and gold, assay reports included rich amounts of Ruthenium, and Rhodium.  Sulfides include calchopyrite, galena, arsenopyrite.  Samples also have tellurides.  Rich pay dirt from authentic Tomboy High Grade ore! ',
        sold: false,
        extraImages: ['/oreImages/productImages/4.1', '/oreImages/productImages/4.2','/oreImages/productImages/4.3'],
        category: 'ore',
        reservedUntil: null,     // timestamp when reservation expires (null = available)
        reservedBy: null         // optional: session ID or "someone"
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