// src/router/index.js — FINAL WITH NEW PAGES
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import History from '../views/History.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    { path: '/products/:id', name: 'ProductDetail', component: ProductDetail },
    { path: '/history', name: 'History', component: History },
    { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
  ],
})

export default router