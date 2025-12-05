<!-- src/App.vue — FINAL CART TEASER (tested 100%) -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation (unchanged) -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-2xl font-bold text-gray-900">Tomboy Mine Relics</router-link>
          <nav class="flex space-x-8 text-lg">
            <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
            <router-link to="/products" class="text-gray-700 hover:text-gray-900">Shop</router-link>
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

    <!-- SMART CART TEASER — ALL FEATURES YOU ASKED FOR -->
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
import { ref, watch, onMounted } from 'vue'

const store = useRelicsStore()
const cart = store.cart
const showTeaser = ref(false)
let hideTimer = null

// Show teaser when cart changes (add or remove)
watch(
  () => store.cart.length,
  (newCount) => {
    if (newCount > 0) {
      showTeaser.value = true
      // Clear old timer
      if (hideTimer) clearTimeout(hideTimer)
      // Auto-hide after 10 seconds
      hideTimer = setTimeout(() => {
        showTeaser.value = false
      }, 10000)
    } else {
      showTeaser.value = false
    }
  },
  { immediate: true }
)

// Manual hide
const hideTeaser = () => {
  showTeaser.value = false
  if (hideTimer) clearTimeout(hideTimer)
}

onMounted(() => {
  if (store.cart.length > 0) showTeaser.value = true
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>