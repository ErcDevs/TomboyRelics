<!-- src/views/Home.vue — NEW HERO + HISTORY + CAROUSEL -->
<template>
  <div>
    <!-- Hero Image -->
    <div class="relative h-96 md:h-screen bg-cover bg-center" style="background-image: url('/hero-tomboy-mine.jpg')">
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <h1 class="text-5xl md:text-7xl font-bold mb-4">Tomboy Mine</h1>
          <p class="text-2xl md:text-4xl">Third Richest Gold Mine in Colorado History</p>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <div class="py-20 bg-white">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-8">A Legendary Colorado Treasure</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          High above Telluride in the Savage Basin, the Tomboy Mine operated from 1894 to 1928 and produced over $8 million in gold — 
          making it the third richest gold mine in Colorado. Its relics are authentic pieces of American mining history.
        </p>
        <router-link to="/history" class="mt-8 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700">
          Explore the Full History →
        </router-link>
      </div>
    </div>

    <!-- Featured Products Carousel -->
    <div class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6">
        <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Featured Relics</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <RelicCard v-for="relic in featured" :key="relic.id" :relic="relic" />
        </div>
        <div class="text-center mt-12">
          <router-link to="/products" class="text-xl text-blue-600 hover:underline font-semibold">
            View All Relics →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRelicsStore } from '@/stores/relics'
import RelicCard from '@/components/RelicCard.vue'

const store = useRelicsStore()
const featured = computed(() => store.items.filter(r => !r.sold).slice(0, 8))
</script>