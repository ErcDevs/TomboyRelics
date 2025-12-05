<!-- src/components/RelicCard.vue — FINAL WORKING -->
<template>
  <router-link 
    :to="relic.category === 'ore' ? `/shop/ore/${relic.id}` : `/shop/relics/${relic.id}`" 
    class="block"
  >
    <div class="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div class="aspect-square bg-gray-200">
        <img
          :src="relic.image"
          :alt="relic.name"
          class="h-full w-full object-cover group-hover:opacity-90 transition-opacity"
        />
        <div v-if="relic.sold" class="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10">
          <span class="text-white text-3xl font-bold tracking-wider">SOLD</span>
        </div>
      </div>

      <div class="p-6 text-center">
        <h3 class="text-xl font-bold text-gray-900 mb-2">{{ relic.name }}</h3>
        <p class="text-3xl font-bold text-green-600">${{ relic.price }}</p>
        <p class="mt-3 text-sm text-gray-500">Click for details →</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  relic: {
    type: Object,
    required: true
  }
})
</script>