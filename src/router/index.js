// src/router/index.js — FULL CURRENT FILE + ONLY THE MISSING DETAIL ROUTE
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'   // ← now correctly points to your existing file

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },

    // ← NEW: Uses your existing ProductDetail.vue
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetail,
    },

    // Funnels eBay traffic → /products?fromEbay=123 (unchanged)
    {
      path: '/ebay/:id',
      redirect: (to) => ({
        path: '/products',
        query: { fromEbay: to.params.id },
      }),
    },

    // Cart (unchanged)
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },
  ],
})

export default router