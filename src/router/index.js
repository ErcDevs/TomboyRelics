import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  // We'll create these views next

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/products', name: 'products', component: () => import('../views/ProductsView.vue') },
    { path: '/product/:id', name: 'product', component: () => import('../views/ProductView.vue') },
    { path: '/cart', name: 'cart', component: () => import('../views/CartView.vue') },
    { path: '/checkout', name: 'checkout', component: () => import('../views/CheckoutView.vue') },
  ]
})

export default router