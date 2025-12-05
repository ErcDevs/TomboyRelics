<!-- src/views/ShopOre.vue — ORE PRODUCT GRID -->
<template>
  <div class="py-12">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex items-center justify-between mb-12">
        <h1 class="text-4xl font-bold text-gray-900">Tomboy High-Grade Ore</h1>
        <router-link to="/shop" class="text-blue-600 hover:underline">← Back to Categories</router-link>
      </div>
      <div class="-mx-px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-gray-200 sm:mx-0 gap-px">
        <div v-for="ore in availableOre" :key="ore.id" class="group relative border-r border-b border-gray-200 p-4 sm:p-6">
          <div v-if="ore.sold" class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10 pointer-events-none">
            <span class="text-white text-2xl font-bold tracking-wider">SOLD OUT</span>
          </div>
          <RelicCard :relic="ore" :class="{ 'opacity-50': ore.sold }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useOreStore } from '@/stores/ore'
import RelicCard from '@/components/RelicCard.vue'

const store = useOreStore()
const availableOre = computed(() => store.items.filter(r => !r.sold))
</script>