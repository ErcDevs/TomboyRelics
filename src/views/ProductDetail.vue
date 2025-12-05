<!-- src/views/ProductDetail.vue — FINAL 100% WORKING -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-6xl px-4">
      <router-link to="/shop" class="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to Categories
      </router-link>

      <div v-if="product" class="grid md:grid-cols-2 gap-12">
        <!-- Images -->
        <div class="space-y-4">
          <!-- Main Image — swaps when thumbnail clicked -->
          <img 
            :src="currentImage" 
            :alt="product.name" 
            class="w-full rounded-xl shadow-lg object-cover h-96 cursor-pointer hover:opacity-90 transition" 
          />
          
          <!-- Extra Images Gallery — clickable thumbnails -->
          <div v-if="hasExtraImages" class="grid grid-cols-3 gap-4">
            <img
              v-for="(img, i) in product.extraImages"
              :key="i"
              :src="absoluteImagePath(img)"
              :class="['rounded-lg shadow cursor-pointer hover:opacity-80 transition', { 'ring-2 ring-blue-500': absoluteImagePath(img) === currentImage }]"
              @click="currentImage = absoluteImagePath(img)"
            />
          </div>
          <p v-else class="text-sm text-gray-500 text-center">No additional images available</p>
        </div>

        <!-- Details (your exact design) -->
        <div>
          <h1 class="text-5xl font-bold text-gray-900">{{ product.name }}</h1>
          <p class="mt-6 text-2xl text-gray-700 leading-relaxed">{{ product.desc }}</p>
          <p class="mt-8 text-6xl font-bold text-green-600">${{ product.price }}</p>

          <!-- SOLD -->
          <div v-if="product.sold" class="mt-8 text-center py-12">
            <p class="text-5xl font-bold text-red-600">SOLD OUT</p>
          </div>
          <!-- RESERVED BY SOMEONE ELSE -->
          <div v-else-if="product.reservedUntil && !isMyReservation" class="mt-8 text-center py-12 bg-yellow-100 rounded-lg">
            <p class="text-3xl font-bold text-yellow-800">Currently Reserved</p>
            <p class="text-xl text-gray-700 mt-4">
              This item is in another customer's cart.<br>
              Available again in {{ minutesLeft }} minutes.
            </p>
          </div>
          <!-- AVAILABLE OR MY RESERVATION -->
          <button
            v-else
            @click="addToCart"
            :disabled="product.reservedUntil && !isMyReservation"
            class="mt-8 w-full bg-blue-600 text-white text-2xl font-bold py-6 rounded-xl hover:opacity-90 disabled:opacity-50"
          >
            {{ product.reservedUntil ? 'Already in your cart (reserved)' : 'Add to Cart' }}
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

    <!-- Toast -->
    <div v-if="toast.message" class="fixed top-4 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-lg shadow-2xl z-50">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRelicsStore } from '@/stores/relics'
import { useOreStore } from '@/stores/ore'

const route = useRoute()
const relicsStore = useRelicsStore()
const oreStore = useOreStore()

const toast = ref({ message: '' })

const product = computed(() => {
  const id = Number(route.params.id)
  if (route.path.includes('/shop/ore')) {
    return oreStore.items.find(i => i.id === id)
  } else {
    return relicsStore.items.find(i => i.id === id)
  }
})

// Current image for main slot
const currentImage = ref('')

// Force absolute path for images
const absoluteImagePath = (img) => {
  return img.startsWith('/') ? img : '/' + img
}

// Safe check for extra images
const hasExtraImages = computed(() => {
  return Array.isArray(product.value?.extraImages) && product.value.extraImages.length > 0
})

const isMyReservation = computed(() => product.value?.reservedBy === sessionId.value)

const minutesLeft = computed(() => {
  if (!product.value?.reservedUntil) return 0
  const diff = (product.value.reservedUntil - Date.now()) / 60000
  return Math.max(0, Math.ceil(diff))
})

const sessionId = ref(crypto.randomUUID())

const addToCart = () => {
  if (!product.value || product.value.sold) return

  const store = route.path.includes('/shop/ore') ? oreStore : relicsStore

  if (product.value.reservedUntil && !isMyReservation.value) {
    toast.value = { message: `This item is reserved by another customer for ${minutesLeft.value} more minutes.` }
    setTimeout(() => toast.value = { message: '' }, 5000)
    return
  }

  product.value.reservedUntil = Date.now() + 10 * 60 * 1000
  product.value.reservedBy = sessionId.value

  store.addToCart({ ...product.value })
  toast.value = { message: 'Added to cart! Reserved for you for 10 minutes.' }
  setTimeout(() => toast.value = { message: '' }, 5000)
}

onMounted(() => {
  currentImage.value = product.value?.image ? absoluteImagePath(product.value.image) : ''
  const store = route.path.includes('/shop/ore') ? oreStore : relicsStore
  store.items.forEach(item => {
    if (item.reservedUntil && item.reservedUntil < Date.now()) {
      item.reservedUntil = null
      item.reservedBy = null
    }
  })
})
</script>