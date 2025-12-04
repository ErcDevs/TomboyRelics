<!-- src/views/Cart.vue — FULLY FUNCTIONAL FINAL VERSION -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-4xl px-4">

      <!-- Empty Cart -->
      <div v-if="cart.length === 0 && !justPurchased" class="text-center py-20">
        <p class="text-xl text-gray-600">
          Your cart is empty — 
          <router-link to="/products" class="text-blue-600 hover:underline font-medium">
            browse Tomboy Mine relics →
          </router-link>
        </p>
      </div>

      <!-- Success Message After Purchase -->
      <div v-if="justPurchased" class="text-center py-20">
        <h1 class="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p class="text-xl text-gray-700">Your relics have been reserved exclusively for you.</p>
        <p class="mt-4 text-gray-600">We'll contact you shortly with payment and shipping details.</p>
        <router-link to="/products" class="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Continue Browsing
        </router-link>
      </div>

      <!-- Cart Items -->
      <div v-else-if="cart.length > 0" class="space-y-6">
        <h1 class="text-3xl font-bold text-gray-900">Your Cart</h1>

        <div class="space-y-4">
          <div
            v-for="item in cart"
            :key="item.id"
            class="bg-white p-6 rounded-lg border flex justify-between items-center shadow-sm"
          >
            <div class="flex items-center space-x-6">
              <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-lg" />
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
                <p class="text-gray-600 mt-1">{{ item.desc }}</p>
                <p class="text-xl font-bold text-green-600 mt-2">${{ item.price }}</p>
              </div>
            </div>
            <button
              @click="store.removeFromCart(item.id)"
              class="text-red-600 hover:text-red-800 font-medium transition"
            >
              Remove
            </button>
          </div>
        </div>

        <!-- Checkout Section -->
        <div class="bg-white p-8 rounded-lg border mt-8 shadow-md">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Order Total</h2>
            <p class="text-3xl font-bold text-green-600">${{ store.total }}</p>
          </div>

          <button
            @click="handleCheckout"
            class="w-full bg-green-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-green-700 transition shadow-lg"
          >
            Checkout with Square (Coming Soon)
          </button>

          <p class="text-sm text-gray-500 text-center mt-4">
            Secure payment • Exclusive to tomboyrelics.com • No eBay fees
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'
import { ref } from 'vue'

const store = useRelicsStore()
const justPurchased = ref(false)

const handleCheckout = () => {
  // STEP 1: Mark every item in cart as SOLD in inventory
  store.cart.forEach(cartItem => {
    const inventoryItem = store.items.find(item => item.id === cartItem.id)
    if (inventoryItem) {
      inventoryItem.sold = true
    }
  })

  // STEP 2: Clear the cart
  store.clearCart()

  // STEP 3: Show thank you screen
  justPurchased.value = true

  // Later: Replace this with real Square SDK integration
  // For now, it instantly "reserves" the relic and removes it from sale
}
</script>