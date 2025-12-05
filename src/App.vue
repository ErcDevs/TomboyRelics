<!-- src/App.vue — YOUR CURRENT + NAV HEADER -->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
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

    <!-- Cart Teaser -->
    <div v-if="cart.length > 0" class="fixed bottom-4 right-4 bg-white shadow-xl rounded-lg p-4 border z-50 max-w-sm">
      <div class="flex justify-between items-center mb-2">
        <span class="font-semibold">Cart: {{ cart.length }} items</span>
        <router-link to="/cart" class="text-blue-600 hover:underline text-sm">View →</router-link>
      </div>
      <p class="text-lg font-bold text-green-600">${{ total }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'
const store = useRelicsStore()
const cart = store.cart
const total = store.getTotal
</script>