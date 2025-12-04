<!-- src/components/RelicCard.vue — FULL CURRENT + CLICK NAV TO DETAIL -->
<template>
  <!-- Full card clickable to detail page -->
  <router-link :to="`/products/${product.id}`" class="block group relative border-r border-b border-gray-200 p-4 sm:p-6 bg-white hover:bg-gray-50 transition">
    <img
      :src="product.imageSrc || product.image"
      :alt="product.imageAlt || product.name"
      class="aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75 transition-opacity"
    />
    <div class="pt-10 pb-4 text-center">
      <h3 class="text-sm font-medium text-gray-900">
        <span aria-hidden="true" class="absolute inset-0"></span>
        {{ product.name }}
      </h3>
      <div class="mt-3 flex flex-col items-center">
        <p class="sr-only">{{ product.rating }} out of 5 stars</p>
        <div class="flex items-center">
          <StarIcon
            v-for="rating in [0, 1, 2, 3, 4]"
            :key="rating"
            :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'size-5 shrink-0']"
            aria-hidden="true"
          />
        </div>
        <p class="mt-1 text-sm text-gray-500">{{ product.reviewCount }} reviews</p>
      </div>
      <p class="mt-4 text-base font-medium text-gray-900">${{ product.price }}</p>
      <!-- Details hint (no eBay link per your request) -->
      <p class="mt-2 text-sm text-blue-600 font-medium cursor-pointer">Details →</p>
    </div>
  </router-link>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>