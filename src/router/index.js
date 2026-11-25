// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import ProductDetail from '../views/ProductDetail.vue'
import { findOre } from '@/data/ore'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Authentic Tomboy Mine Ore from Telluride, Colorado' } },
  { path: '/shop', name: 'Shop', component: Shop, meta: { title: 'Shop Ore Specimens' } },
  { path: '/shop/ore/:id', name: 'OreDetail', component: ProductDetail },
  { path: '/history', name: 'History', component: () => import('../views/History.vue'), meta: { title: 'History of the Tomboy Mine' } },
  { path: '/ore-reference', name: 'OreReference', component: () => import('../views/OreReference.vue'), meta: { title: 'Tomboy Ore Reference' } },
  { path: '/shipping-returns', name: 'Policies', component: () => import('../views/Policies.vue'), meta: { title: 'Shipping, Returns & Contact' } },
  { path: '/cart', name: 'Cart', component: () => import('../views/Cart.vue'), meta: { title: 'Your Cart' } },
  { path: '/thank-you', name: 'ThankYou', component: () => import('../views/ThankYou.vue'), meta: { title: 'Thank You' } },
  // Old URLs
  { path: '/shop/ore', redirect: '/shop' },
  { path: '/shop/relics/:rest(.*)*', redirect: '/shop' },
  { path: '/products', redirect: '/shop' },
  { path: '/:rest(.*)*', redirect: '/' },
]

// Private tools only exist when running locally with `npm run dev`.
// They are not included in the public site.
if (import.meta.env.DEV) {
  routes.unshift(
    { path: '/tools/pricing', component: () => import('../views/private/OrePricingTool.vue') },
    { path: '/tools/ebay', component: () => import('../views/private/EBayListingTool.vue') },
  )
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  const ore = to.name === 'OreDetail' ? findOre(to.params.id) : null
  const title = ore ? `${ore.name} – Tomboy Mine Ore` : to.meta.title
  document.title = title ? `${title} | Tomboy Relics` : 'Tomboy Relics'
})

export default router
