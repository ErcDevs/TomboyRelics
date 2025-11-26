import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/product/:id', name: 'product', component: () => import('../views/ProductDetail.vue') },
  { path: '/checkout', name: 'checkout', component: () => import('../views/CheckoutView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
