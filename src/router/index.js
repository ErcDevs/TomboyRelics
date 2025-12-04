import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  // Stub next
import Products from '../views/Products.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/ebay/:id', redirect: (to) => ({ path: '/products', query: { fromEbay: to.params.id } }) },  // Funnel eBay traffic
    { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },  // Stub for Square
  ],
});

export default router;