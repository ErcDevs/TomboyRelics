<!-- src/views/Products.vue — FINAL VERSION (copy-paste ready) -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- Page Title -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900">Tomboy Mine Relics</h1>
        <p class="mt-4 text-lg text-gray-600">
          Historic mining treasures from Savage Basin, Colorado — exclusively available here.
        </p>
      </div>

      <!-- Available Relics Grid -->
      <div v-if="availableRelics.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="relic in availableRelics" :key="relic.id" class="relative">
          <!-- Sold Out Badge (only shows if item was bought) -->
          <div
            v-if="relic.sold"
            class="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center z-10"
          >
            <span class="text-white text-2xl font-bold tracking-wider">SOLD OUT</span>
          </div>

          <!-- Relic Card -->
          <RelicCard :relic="relic" :class="{ 'opacity-50 pointer-events-none': relic.sold }" />
        </div>
      </div>

      <!-- Empty State — All relics sold -->
      <div v-else class="text-center py-24">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">All relics have found new homes!</h2>
        <p class="text-xl text-gray-600">Check back soon — new Tomboy Mine treasures are added regularly.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRelicsStore } from '@/stores/relics'
import RelicCard from '@/components/RelicCard.vue'

const store = useRelicsStore()

// Only show relics that are NOT sold
const availableRelics = computed(() => {
  return store.items.filter(relic => !relic.sold)
})
</script>