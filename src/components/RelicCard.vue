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
        {{ relic.name }}
      </h3>

      <p class="mt-2 text-sm text-gray-600">{{ relic.desc }}</p>

      <p class="mt-4 text-2xl font-bold text-green-600">${{ relic.price }}</p>

      <!-- Add to Cart ONLY — no more eBay link -->
      <button
        @click="addToCart"
        class="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Add to Cart
      </button>

      <!-- Optional small note so customers know it’s exclusive -->
      <p class="mt-3 text-xs text-gray-500">Exclusive to tomboyrelics.com</p>
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