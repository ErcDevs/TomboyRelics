<!-- src/App.vue — YOUR EXACT CURRENT + router-view (tested) -->
<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900">Tomboy Mine Relics</h1>
        <p class="mt-4 text-lg text-gray-600">Historic mining treasures from Colorado's Savage Basin.</p>
        <router-link to="/products" class="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Browse All Relics
        </router-link>
      </div>

      <!-- THIS IS THE ONLY CHANGE — enables full page routing -->
      <router-view />

      <!-- Cart Teaser stays fixed on all pages -->
      <div v-if="cart.length > 0" class="fixed bottom-4 right-4 bg-white shadow-xl rounded-lg p-4 border z-50 max-w-sm">
        <div class="flex justify-between items-center mb-2">
          <span class="font-semibold">Cart: {{ cart.length }} items</span>
          <router-link to="/cart" class="text-blue-600 hover:underline text-sm">View</router-link>
        </div>
        <p class="text-lg font-bold text-green-600">${{ total }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'

const store = useRelicsStore()
const cart = store.cart
const total = store.getTotal
</script>