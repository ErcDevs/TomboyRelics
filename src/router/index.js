// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },

    // Funnels eBay traffic → /products?fromEbay=123
    {
      path: '/ebay/:id',
      redirect: (to) => ({
        path: '/products',
        query: { fromEbay: to.params.id },
      }),
    },

    // Uses the real Cart.vue file you already created
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },
  ],
})

export default router