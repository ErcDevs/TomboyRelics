<template>
  <div class="min-h-screen flex flex-col bg-stone-50 text-stone-800">
    <header class="bg-stone-900 text-stone-100 sticky top-0 z-40 shadow">
      <div class="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <router-link to="/" class="font-serif text-xl sm:text-2xl tracking-wide text-amber-300">Tomboy Relics</router-link>

        <nav class="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
          <router-link v-for="l in links" :key="l.to" :to="l.to" class="hover:text-amber-300" active-class="text-amber-300">{{ l.label }}</router-link>
          <CartLink />
        </nav>

        <div class="flex items-center gap-4 md:hidden">
          <CartLink />
          <button @click="open = !open" class="p-2" aria-label="Menu">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path v-if="!open" d="M4 6h16M4 12h16M4 18h16" /><path v-else d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
      <nav v-if="open" class="md:hidden border-t border-stone-700 px-4 py-2">
        <router-link v-for="l in links" :key="l.to" :to="l.to" @click="open = false" class="block py-3 uppercase tracking-wider text-sm hover:text-amber-300">{{ l.label }}</router-link>
      </nav>
    </header>

    <main class="flex-1"><router-view /></main>

    <footer class="bg-stone-900 text-stone-400 text-sm">
      <div class="mx-auto max-w-6xl px-4 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p class="font-serif text-lg text-amber-300">Tomboy Relics</p>
          <p class="mt-2">Ore specimens from the active Tomboy claim, Savage Basin, above Telluride, Colorado.</p>
        </div>
        <div class="space-y-2">
          <router-link to="/shop" class="block hover:text-amber-300">Shop</router-link>
          <router-link to="/history" class="block hover:text-amber-300">History</router-link>
          <router-link to="/ore-reference" class="block hover:text-amber-300">Ore Reference</router-link>
          <router-link to="/shipping-returns" class="block hover:text-amber-300">Shipping, Returns &amp; Contact</router-link>
        </div>
        <div>
          <p>Secure checkout by Square.</p>
          <p class="mt-1">Ships to US addresses only.</p>
          <a v-if="SITE.contactEmail" :href="`mailto:${SITE.contactEmail}`" class="mt-1 block hover:text-amber-300">{{ SITE.contactEmail }}</a>
        </div>
      </div>
      <p class="text-center text-xs text-stone-500 pb-6">© {{ new Date().getFullYear() }} Tomboy Relics</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CartLink from '@/components/CartLink.vue'
import { useCartStore } from '@/stores/cart'
import { SITE } from '@/data/site'

const open = ref(false)
const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/history', label: 'History' },
  { to: '/ore-reference', label: 'Ore Reference' },
]
onMounted(() => useCartStore().loadSold())
</script>
