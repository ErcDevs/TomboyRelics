<!-- src/App.vue — FINAL WORKING NAVIGATION -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-2xl font-bold text-gray-900">Tomboy Mine Relics</router-link>
          <nav class="flex space-x-8 text-lg">
            <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
            <router-link to="/shop" class="text-gray-700 hover:text-gray-900">Shop</router-link>
            <router-link to="/history" class="text-gray-700 hover:text-gray-900">History</router-link>
            <router-link to="/cart" class="relative text-gray-700 hover:text-gray-900">
              Cart
              <span v-if="cart.length" class="absolute -top-2 -right-4 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {{ cart.length }}
              </span>
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <router-view />

    <!-- Cart Teaser -->
    <transition name="fade">
      <div
        v-if="showTeaser && cart.length > 0"
        @click="hideTeaser()"
        class="fixed bottom-4 right-4 bg-white shadow-2xl rounded-lg p-5 border-2 border-gray-300 z-50 max-w-sm cursor-pointer hover:shadow-3xl transition-all"
      >
        <div class="flex justify-between items-center mb-2">
          <span class="font-bold text-gray-900">Cart: {{ cart.length }} item{{ cart.length > 1 ? 's' : '' }}</span>
          <router-link to="/cart" class="text-blue-600 hover:underline text-sm font-medium" @click.stop>
            View Cart →
          </router-link>
        </div>
        <p class="text-2xl font-bold text-green-600">${{ store.total }}</p>
        <p class="text-xs text-gray-500 mt-3">Click to hide</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'
import { useOreStore } from '@/stores/ore'
import { ref, watch, onMounted } from 'vue'

// Combine both stores for cart
const relicsStore = useRelicsStore()
const oreStore = useOreStore()
const cart = [...relicsStore.cart, ...oreStore.cart]
const total = relicsStore.total + oreStore.total

const showTeaser = ref(false)
let hideTimer = null

watch(
  () => cart.length,
  (newCount) => {
    if (newCount > 0) {
      showTeaser.value = true
      if (hideTimer) clearTimeout(hideTimer)
      hideTimer = setTimeout(() => {
        showTeaser.value = false
      }, 10000)
    } else {
      showTeaser.value = false
    }
  },
  { immediate: true }
)

const hideTeaser = () => {
  showTeaser.value = false
  if (hideTimer) clearTimeout(hideTimer)
}

onMounted(() => {
  if (cart.length > 0) showTeaser.value = true
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>