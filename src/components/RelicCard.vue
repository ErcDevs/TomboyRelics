<!-- src/components/RelicCard.vue (Extracted from your App.vue grid) -->
<template>
  <div class="group relative border-r border-b border-gray-200 p-4 sm:p-6 bg-white hover:bg-gray-50 transition">
    <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
      <img
        :src="relic.imageSrc || relic.image"
        :alt="relic.imageAlt || relic.name"
        class="h-full w-full object-cover group-hover:opacity-75 transition-opacity"
      />
    </div>
    <div class="pt-10 pb-4 text-center">
      <h3 class="text-sm font-medium text-gray-900">
        <a :href="relic.href || relic.ebay" target="_blank" class="hover:text-amber-700">
          <span class="absolute inset-0"></span>
          {{ relic.name }}
        </a>
      </h3>
      <div class="mt-3 flex flex-col items-center">
        <!-- Keep your stars if relic has rating (optional for relics) -->
        <div v-if="relic.rating" class="flex items-center">
          <StarIcon
            v-for="rating in [0, 1, 2, 3, 4]"
            :key="rating"
            :class="[relic.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
            aria-hidden="true"
          />
        </div>
        <p v-if="relic.reviewCount" class="mt-1 text-sm text-gray-500">{{ relic.reviewCount }} reviews</p>
        <!-- Relic desc (new—your originals lacked this) -->
        <p v-if="relic.desc" class="mt-2 text-sm text-gray-600">{{ relic.desc }}</p>
      </div>
      <p class="mt-4 text-base font-medium text-gray-900">${{ relic.price }}</p>
      <!-- Add to Cart + eBay (new actions) -->
      <div class="mt-4 space-y-2">
        <button
          @click="addToCart"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
        >
          Add to Cart
        </button>
        <a
          :href="relic.href || relic.ebay"
          target="_blank"
          class="block w-full text-center text-blue-600 text-sm hover:underline"
        >
          View on eBay
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
import { useRelicsStore } from '@/stores/relics'

const props = defineProps({ relic: Object })
const store = useRelicsStore()

const addToCart = () => {
  store.addToCart(props.relic)
}
</script>