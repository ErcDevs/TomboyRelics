<!-- src/views/ProductDetail.vue — FINAL WORKING -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-6xl px-4">
      <router-link to="/shop" class="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Categories
      </router-link>

      <div v-if="product" class="grid md:grid-cols-2 gap-12">
        <!-- Images -->
        <div class="space-y-4">
          <img :src="product.image" :alt="product.name" class="w-full rounded-xl shadow-lg object-cover h-96" />
          <div class="grid grid-cols-3 gap-4">
            <img v-for="(img, i) in product.extraImages" :key="i" :src="img" class="rounded-lg shadow cursor-pointer hover:opacity-80" />
          </div>
        </div>

        <!-- Details -->
        <div>
          <h1 class="text-5xl font-bold text-gray-900">{{ product.name }}</h1>
          <p class="mt-6 text-2xl text-gray-700 leading-relaxed">{{ product.desc }}</p>
          <p class="mt-8 text-6xl font-bold text-green-600">${{ product.price }}</p>

          <div v-if="product.sold" class="mt-8 text-center py-12">
            <p class="text-5xl font-bold text-red-600">SOLD OUT</p>
          </div>
          <button v-else @click="addToCart" class="mt-8 w-full bg-blue-600 text-white text-2xl font-bold py-6 rounded-xl hover:opacity-90">
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
import { useOreStore } from '@/stores/ore'

const route = useRoute()
const relicsStore = useRelicsStore()
const oreStore = useOreStore()

const product = computed(() => {
  const id = Number(route.params.id)
  const category = route.path.includes('/shop/ore') ? 'ore' : 'relics'
  
  if (category === 'ore') {
    return oreStore.items.find(i => i.id === id)
  } else {
    return relicsStore.items.find(i => i.id === id)
  }
})

const addToCart = () => {
  if (route.path.includes('/shop/ore')) {
    oreStore.addToCart(product.value)
  } else {
    relicsStore.addToCart(product.value)
  }
}
</script>