import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Stub next
import Products from '../views/Products.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/ebay/:id', redirect: (to) => ({ path: '/products', query: { fromEbay: to.params.id } }) },  // Funnel eBay traffic
    { path: '/cart', name: 'Cart', component: { template: '<div class="p-8 text-center"><h1 class="text-2xl font-bold">Shopping Cart</h1><p>Relics added: {{ cart.length }} | Total: ${{ total }}</p><button class="bg-green-500 text-white px-4 py-2 rounded">Checkout with Square</button></div>' } },  // Inline stub for Square  ],
});

export default router;

