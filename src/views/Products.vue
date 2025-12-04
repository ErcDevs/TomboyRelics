<!-- src/views/Products.vue — FULL CURRENT + PROP ALIGNMENT FOR NAV -->
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
      <div v-if="availableProducts.length > 0" class="-mx-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-gray-200 sm:mx-0 gap-px">
        <div v-for="product in availableProducts" :key="product.id" class="group relative border-r border-b border-gray-200 p-4 sm:p-6">
          <!-- Sold Out Badge -->
          <div
            v-if="product.sold"
            class="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center z-10"
          >
            <span class="text-white text-2xl font-bold tracking-wider">SOLD OUT</span>
          </div>

          <!-- Relic Card — Pass as :product (matches your store) -->
          <RelicCard :product="product" :class="{ 'opacity-50 pointer-events-none': product.sold }" />
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
import { useProductsStore } from '@/stores/products'  // Your existing store
import RelicCard from '@/components/RelicCard.vue'

const store = useProductsStore()

// Only show products that are NOT sold (your existing logic)
const availableProducts = computed(() => {
  return store.items.filter(product => !product.sold)
})
</script>