// src/router/index.js — FINAL
import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },   // Home is now the grid in App.vue
    { path: '/products', name: 'Products', component: Products },
    { path: '/products/:id', name: 'ProductDetail', component: ProductDetail },
    { path: '/ebay/:id', redirect: (to) => ({ path: '/products', query: { fromEbay: to.params.id } }) },
    { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
  ],
})

export default router