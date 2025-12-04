<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-12">
        Tomboy Mine Relics
      </h1>

      <!-- Relic Grid -->
      <div class="-mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <RelicCard
          v-for="relic in relics"
          :key="relic.id"
          :relic="relic"
        />
      </div>

      <!-- Simple cart summary (you can move this to a Cart.vue later) -->
      <div v-if="cart.length" class="fixed bottom-4 right-4 bg-white shadow-2xl rounded-lg p-6 border">
        <p class="font-semibold">Cart ({{ cart.length }}) • ${{ total }}</p>
        <button class="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Checkout (Square coming)
        </button>
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