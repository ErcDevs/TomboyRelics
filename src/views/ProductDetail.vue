<!-- src/views/ProductDetail.vue — FULL PROFESSIONAL DETAIL PAGE (tested) -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-6xl px-4">
      <router-link to="/products" class="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to all relics
      </router-link>

      <div v-if="relic" class="grid md:grid-cols-2 gap-12">
        <!-- 4 Images Gallery -->
        <div class="space-y-4">
          <img :src="relic.image" :alt="relic.name" class="w-full rounded-xl shadow-lg object-cover h-96" />
          <div class="grid grid-cols-3 gap-4">
            <img v-for="(img, i) in relic.extraImages" :key="i" :src="img" class="rounded-lg shadow cursor-pointer hover:opacity-80" />
          </div>
        </div>

        <!-- Details -->
        <div>
          <h1 class="text-5xl font-bold text-gray-900">{{ relic.name }}</h1>
          <p class="mt-6 text-2xl text-gray-700 leading-relaxed">{{ relic.desc }}</p>
          <p class="mt-8 text-6xl font-bold text-green-600">${{ relic.price }}</p>

          <div v-if="relic.sold" class="mt-8 text-center py-12">
            <p class="text-5xl font-bold text-red-600">SOLD OUT</p>
          </div>
          <button v-else @click="store.addToCart(relic)" class="mt-8 w-full bg-mining-brown text-white text-2xl font-bold py-6 rounded-xl hover:opacity-90">
            Add to Cart
          </button>

          <div class="mt-12">
            <h3 class="text-xl font-semibold">Details</h3>
            <ul class="mt-4 space-y-2 text-gray-600">
              <li>• Authentic Tomboy Mine artifact</li>
              <li>• From Savage Basin, Colorado</li>
              <li>• One-of-a-kind historic relic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRelicsStore } from '@/stores/relics'

const route = useRoute()
const store = useRelicsStore()

const relic = computed(() => {
  const id = Number(route.params.id)
  return store.items.find(r => r.id === id)
})
</script>