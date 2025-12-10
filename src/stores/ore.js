// src/stores/ore.js — YOUR EXACT PRODUCTS + .jpeg on extraImages
import { defineStore } from 'pinia'

export const useOreStore = defineStore('ore', {
  state: () => ({
    items: [
      // Add your high-grade ore products here
     
      {
        id: 1,
        name: 'Tomboy Mine High-Grade Bornite Ore Specimen',
        price: 210,
        image: '/oreImages/gridThumbs/1main.jpeg',
        desc: 'Hand-selected specimen from one of the richest veins in Savage Basin. Also known as "Peacock ore" this is a very rare ultra pure calchopyrite specimen.',
        sold: false,
        extraImages: ['/oreImages/productImages/1.1.jpeg', '/oreImages/productImages/1.2.jpeg'],  // ← FIXED: added .jpeg
        category: 'ore',
        reservedUntil: null,
        reservedBy: null
      },
      {
        "id": 2,
        "name": "Stunning Visible Gold & Chalcopyrite on Quartz – Rothschild-Era High-Grade Tomboy Ore",
        "price": 795,
        "image": "/oreImages/gridThumbs/2main.jpeg",
        "desc": "One of the most photogenic high-grade pieces we’ve ever pulled from the Tomboy Claim – a dazzling combination of snow-white quartz completely coated and veined with mirror-bright metallic gold-yellow chalcopyrite and unmistakable native gold blebs that shine like tiny mirrors.\n\nThe microscope image shows bright, buttery-yellow native gold particles sitting directly on and inside the chalcopyrite crystals and quartz.  This is exactly the style of ore the Rothschilds bet the family fortune on after buying the Tomboy in 1902. Their investment paid off spectacularly: the mine produced over $12 million in gold and silver by 1928 – equivalent to roughly $450 million in 2025 dollars – with the richest pockets (just like this specimen) running 5–20+ ounces of gold per ton alongside hundreds of ounces of silver in the galena.\n\nHand-selected in 2025 from the active claim at 11,500+ ft, still sparkling exactly as it looked the day the last shift walked out in 1928.\n\nWeight: 47.8 grams  \nSize: ~1.75 × 1.5 × 1 inches  \nVisible to the naked eye & under magnification: Native gold + massive chalcopyrite on quartz\n\n100 % authentic Tomboy ore from the most famous Rothschild-owned gold mine in Colorado history.",
        "sold": false,
        "category": "ore",
        "reservedUntil": null,
        "reservedBy": null,
        "extraImages": [
        "/oreImages/productImages/2.1.jpeg",
        "/oreImages/productImages/2.2.jpeg",
        "/oreImages/productImages/2.3.jpeg",
        "/oreImages/productImages/2.4.jpeg"
        ]
        },
      {
        id: 3,
        name: 'Tomboy Mine High-Grade Hard Rock Gold Ore Specimen',
        price: 18,
        image: '/oreImages/gridThumbs/3main.jpeg',
        desc: 'Hand-selected specimen with visible gold flecks in a micro vein of calchopyrite.',
        sold: false,
        extraImages: ['/oreImages/productImages/3.1.jpeg', '/oreImages/productImages/3.2.jpeg'],  // ← FIXED: added .jpeg
        category: 'ore',
        reservedUntil: null,
        reservedBy: null
      },
      {
        id: 4,
        name: 'Tomboy Mine Shaker Table Super-Concentrates',
        price: 195,
        image: '/oreImages/gridThumbs/4main.jpeg',           // your main shaker-table photo
        desc: 'Ultra-rich, hand-processed concentrates straight from our shaker table. This is the final high-grade product after crushing and gravity separation of authentic Tomboy Mine ore. Loaded with free-milling gold and silver, plus exceptional values in Ruthenium and Rhodium (assay reports included). Heavy sulfides present: chalcopyrite, galena, arsenopyrite, and visible tellurides. One of the richest pay-dirt concentrates you will ever own — direct from the third-richest gold mine in Colorado history.',
        sold: false,
        category: 'ore',
        reservedUntil: null,
        reservedBy: null,
        extraImages: [
            '/oreImages/productImages/4.1.jpeg',   // water flowing over sulfides
            '/oreImages/productImages/4.2.jpeg',
            '/oreImages/productImages/4.3.jpeg',
            '/oreImages/productImages/4.4.jpeg'
        ]
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