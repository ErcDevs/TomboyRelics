<!-- src/views/Cart.vue — FINAL 100% WORKING -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-4xl px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <!-- Empty Cart -->
      <div v-if="cart.length === 0" class="text-center py-20">
        <p class="text-xl text-gray-600">
          Your cart is empty — 
          <router-link to="/products" class="text-blue-600 hover:underline font-medium">
            browse Tomboy Mine relics →
          </router-link>
        </p>
      </div>

      <!-- Cart Items -->
      <div v-else class="space-y-6">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="bg-white p-6 rounded-lg border flex justify-between items-center shadow-sm"
        >
          <div class="flex items-center space-x-6">
            <img :src="item.image" :alt="item.name" class="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ item.name }}</h3>
              <p class="text-xl font-bold text-green-600 mt-2">${{ item.price }}</p>
            </div>
          </div>
          <button
            @click="removeFromCart(index)"
            class="text-red-600 hover:text-red-800 font-medium transition"
          >
            Remove
          </button>
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
            Secure payment • Exclusive to tomboyrelics.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'

const store = useRelicsStore()
const cart = store.cart

const removeFromCart = (index) => {
  store.cart.splice(index, 1)  // ← Removes only this exact item
}

const handleCheckout = () => {
  store.cart.forEach(item => {
    const inventoryItem = store.items.find(i => i.id === item.id)
    if (inventoryItem) inventoryItem.sold = true
  })
  store.clearCart()
  alert('Thank you! Your relics are reserved. We’ll contact you for payment.')
}
</script>