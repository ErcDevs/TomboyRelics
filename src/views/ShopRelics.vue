<!-- src/views/ShopRelics.vue — FINAL WORKING -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-12">
        <h1 class="text-4xl font-bold text-gray-900">Authentic Tomboy Relics</h1>
        <router-link to="/shop" class="text-blue-600 hover:underline text-lg">
          ← Back to Categories
        </router-link>
      </div>

      <div class="-mx-px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-gray-200 sm:mx-0 gap-px">
        <div v-for="relic in availableRelics" :key="relic.id" class="group relative border-r border-b border-gray-200 p-4 sm:p-6">
          <div v-if="relic.sold" class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10 pointer-events-none">
            <span class="text-white text-2xl font-bold tracking-wider">SOLD OUT</span>
          </div>
          <RelicCard :relic="relic" :class="{ 'opacity-50': relic.sold }" />
        </div>
      </div>

      <div v-if="availableRelics.length === 0" class="text-center py-24">
        <p class="text-2xl text-gray-600">No relics available at this time. Check back soon!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRelicsStore } from '@/stores/relics'
import RelicCard from '@/components/RelicCard.vue'

const store = useRelicsStore()
const availableRelics = computed(() => store.items.filter(r => !r.sold))
</script>