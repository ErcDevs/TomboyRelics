<!-- src/views/ProductDetail.vue — FIXED RESERVATION + NO DUPLICATES -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-6">
      <!-- Back button -->
      <router-link 
        :to="product.category === 'ore' ? '/shop/ore' : '/shop/relics'" 
        class="inline-block mb-8 text-blue-600 hover:underline font-medium"
      >
        ← Back to {{ product.category === 'ore' ? 'Ore' : 'Relics' }}
      </router-link>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Image Gallery -->
        <div>
          <img 
            :src="currentImage" 
            :alt="product.name" 
            class="w-full rounded-lg shadow-lg object-cover"
            @click="zoomImage(currentImage)"
          />
          <div v-if="hasExtraImages" class="grid grid-cols-4 gap-4 mt-6">
            <img 
              v-for="(img, i) in product.extraImages" 
              :key="i"
              :src="img" 
              :alt="`${product.name} extra ${i+1}`"
              class="rounded-lg cursor-pointer border-4 transition"
              :class="currentImage === img ? 'border-blue-600' : 'border-transparent'"
              @click="currentImage = img"
            />
          </div>
        </div>

        <!-- Details -->
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
          
          <!-- SOLD Banner -->
          <div v-if="product.sold" class="mb-6">
            <span class="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-xl font-bold">
              SOLD
            </span>
          </div>

          <!-- RESERVED Banner -->
          <div v-if="isReservedByOther" class="mb-6">
            <span class="inline-block bg-orange-600 text-white px-6 py-3 rounded-full text-xl font-bold">
              RESERVED — {{ minutesLeft }} min left
            </span>
          </div>

          <p class="text-3xl font-bold text-green-600 mb-8">${{ product.price }}</p>

          <div class="prose prose-lg mb-8" v-html="formattedDesc"></div>

          <!-- Add to Cart Button — FIXED -->
          <button
            @click="addToCart"
            :disabled="!canAddToCart"
            class="w-full py-5 text-2xl font-bold rounded-lg transition shadow-lg"
            :class="canAddToCart 
              ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer' 
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'"
          >
            {{ buttonText }}
          </button>

          <p v-if="addMessage" class="mt-4 text-center text-lg font-medium" :class="addMessage.includes('added') ? 'text-green-600' : 'text-red-600'">
            {{ addMessage }}
          </p>
        </div>
      </div>
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

const sessionId = ref(crypto.randomUUID())
const currentImage = ref('')
const addMessage = ref('')

// Determine which store + product
const product = computed(() => {
  const id = Number(route.params.id)
  const isOre = route.path.includes('/ore/')
  
  if (isOre) {
    return oreStore.items.find(i => i.id === id) || {}
  } else {
    return relicsStore.items.find(i => i.id === id) || {}
  }
})

// Helper: absolute image path
const absoluteImagePath = (path) => {
  return path.startsWith('http') ? path : import.meta.env.BASE_URL + path.replace(/^\//, '')
}

// Set initial image
onMounted(() => {
  if (product.value.image) {
    currentImage.value = absoluteImagePath(product.value.image)
  }

  // Clean up any expired reservations on load
  const now = Date.now()
  const store = route.path.includes('/ore/') ? oreStore : relicsStore
  store.items.forEach(item => {
    if (item.reservedUntil && item.reservedUntil < now) {
      item.reservedUntil = null
      item.reservedBy = null
    }
  })
})

// Extra images logic
const hasExtraImages = computed(() => 
  product.value.extraImages && product.value.extraImages.length > 0
)

// Format description newlines
const formattedDesc = computed(() => 
  product.value.desc?.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>') || ''
)

// Reservation checks
const isReservedByOther = computed(() => {
  return product.value.reservedUntil && 
         product.value.reservedBy !== sessionId.value && 
         product.value.reservedUntil > Date.now()
})

const minutesLeft = computed(() => {
  if (!product.value.reservedUntil) return 0
  const diff = product.value.reservedUntil - Date.now()
  return Math.max(0, Math.ceil(diff / 60000))
})

// Check if already in cart
const isInCart = computed(() => {
  return relicsStore.cart.some(i => i.id === product.value.id) ||
         oreStore.cart.some(i => i.id === product.value.id)
})

// FINAL: Can add to cart?
const canAddToCart = computed(() => {
  return !product.value.sold && 
         !isReservedByOther.value && 
         !isInCart.value
})

const buttonText = computed(() => {
  if (product.value.sold) return 'Sold Out'
  if (isReservedByOther.value) return 'Reserved by Another Customer'
  if (isInCart.value) return 'Already in Cart'
  return 'Add to Cart'
})

// ADD TO CART — FULLY FIXED
const addToCart = () => {
  if (!canAddToCart.value) return

  const store = route.path.includes('/ore/') ? oreStore : relicsStore
  
  // Reserve for 10 minutes
  product.value.reservedUntil = Date.now() + 10 * 60 * 1000
  product.value.reservedBy = sessionId.value

  // Add to correct store cart
  if (route.path.includes('/ore/')) {
    oreStore.addToCart({ ...product.value })
  } else {
    relicsStore.addToCart({ ...product.value })
  }

  addMessage.value = 'Added to cart! Reserved for 10 minutes.'
  setTimeout(() => addMessage.value = '', 3000)
}

// Optional: zoom (you already have medium-zoom or can add)
const zoomImage = (src) => {
  // your zoom logic
}
</script>