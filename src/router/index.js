// src/router/index.js — FINAL WITH ORE REFERENCE PAGE
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import ShopRelics from '../views/ShopRelics.vue'
import ShopOre from '../views/ShopOre.vue'
import ProductDetail from '../views/ProductDetail.vue'
import History from '../views/History.vue'
import OreReference from '../views/OreReference.vue'  // ← NEW

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/shop', name: 'Shop', component: Shop },
    { path: '/shop/relics', name: 'ShopRelics', component: ShopRelics },
    { path: '/shop/ore', name: 'ShopOre', component: ShopOre },
    { path: '/shop/relics/:id', name: 'RelicDetail', component: ProductDetail },
    { path: '/shop/ore/:id', name: 'OreDetail', component: ProductDetail },
    { path: '/history', name: 'History', component: History },
    { path: '/ore-reference', name: 'OreReference', component: OreReference },  // ← NEW PAGE
    { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue') },
    {path: '/my-secret-pricing-tool-1987',name: 'OrePricingTool',component: () => import('@/views/OrePricingTool.vue')},
  ],
})

export default router