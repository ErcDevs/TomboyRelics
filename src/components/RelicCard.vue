<!-- src/components/RelicCard.vue -->
<template>
  <div class="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div class="aspect-square bg-gray-200">
      <img
        :src="relic.image"
        :alt="relic.name"
        class="h-full w-full object-cover group-hover:opacity-80 transition-opacity"
      />
    </div>

    <div class="p-6 text-center">
      <h3 class="text-lg font-semibold text-gray-900">
        <a :href="relic.ebay" target="_blank" class="hover:text-amber-700">
          {{ relic.name }}
        </a>
      </h3>

      <p class="mt-2 text-sm text-gray-600">{{ relic.desc }}</p>

      <p class="mt-4 text-2xl font-bold text-green-600">${{ relic.price }}</p>

      <div class="mt-6 space-y-3">
        <button
          @click="addToCart"
          class="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
        <a
          :href="relic.ebay"
          target="_blank"
          rel="noopener"
          class="block w-full text-center text-sm text-blue-600 hover:underline"
        >
          View on eBay →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'
const props = defineProps({ relic: Object })
const store = useRelicsStore()

const addToCart = () => {
  store.addToCart(props.relic)
}
</script>