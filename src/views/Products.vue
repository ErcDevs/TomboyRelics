<!-- src/views/Products.vue — YOUR EXACT GRID (tested) -->
<template>
  <div class="-mx-px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-gray-200 sm:mx-0 gap-px">
    <div v-for="relic in availableRelics" :key="relic.id" class="group relative border-r border-b border-gray-200 p-4 sm:p-6">
      <!-- SOLD OUT badge -->
      <div v-if="relic.sold" class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10 pointer-events-none">
        <span class="text-white text-2xl font-bold tracking-wider">SOLD OUT</span>
      </div>

      <RelicCard :relic="relic" :class="{ 'opacity-50': relic.sold }" />
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