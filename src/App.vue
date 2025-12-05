<!-- src/App.vue — YOUR EXACT CURRENT FILE + ONLY <router-view /> ADDED -->
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

      <!-- THIS IS THE ONLY LINE ADDED -->
      <router-view />

      <!-- Relic Grid (Your original layout, now Pinia-fed) -->
      <h2 class="sr-only">Relics</h2>
      <div class="-mx-px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-gray-200 sm:mx-0 gap-px">
        <RelicCard
          v-for="relic in relics"
          :key="relic.id"
          :relic="relic"
        />
      </div>

      <!-- Cart Teaser (Fixed bottom-right; shows Pinia state) -->
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
import RelicCard from '@/components/RelicCard.vue'

const store = useRelicsStore()
const relics = store.items
const cart = store.cart
const total = store.getTotal
</script>