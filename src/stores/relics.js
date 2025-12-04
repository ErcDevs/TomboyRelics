import { defineStore } from 'pinia';

export const useRelicsStore = defineStore('relics', {
  state: () => ({
    items: [
      { id: 1, name: 'High-Grade Zinc Ore Bar', price: 45, image: '/assets/zinc-bar.jpg', desc: 'Savage Basin extract, 1890s purity', ebay: 'https://ebay.com/your-zinc-listing' },
      { id: 2, name: 'Beaver Pelt Miner\'s Hat', price: 120, image: '/assets/beaver-hat.png', desc: 'Tomboy original, weather-worn relic', ebay: 'https://ebay.com/your-hat-listing' },
      { id: 3, name: 'Desilvering Kettle', price: 80, image: '/assets/kettle.jpg', desc: 'Historic ore processor from the mine', ebay: 'https://ebay.com/your-kettle-listing' },
      // Add crucible, ore samples—aim for 10 to drive eBay traffic
    ],
    cart: [],
  }),
  actions: {
    addToCart(relic) { this.cart.push({ ...relic }); },
    getTotal() { return this.cart.reduce((sum, item) => sum + item.price, 0); },
  },
  getters: {
    filteredByPrice: (state) => (max) => state.items.filter(item => item.price <= max),
  },
});

