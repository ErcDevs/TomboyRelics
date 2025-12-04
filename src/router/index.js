// src/router/index.js — YOUR EXACT CURRENT FILE + ONLY THE MISSING ROUTE ADDED
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'   // ← ONLY LINE ADDED

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },

    // ← ONLY NEW ROUTE — USES YOUR EXISTING ProductDetail.vue
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetail,
    },

    {
      path: '/ebay/:id',
      redirect: (to) => ({
        path: '/products',
        query: { fromEbay: to.params.id },
      }),
    },

    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },
  ],
})

export default router