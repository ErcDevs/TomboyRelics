<!-- src/views/Cart.vue -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-4xl px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      <div v-if="cart.length === 0" class="text-center py-12">
        <p class="text-lg text-gray-600">No relics yet—<router-link to="/products" class="text-blue-600 hover:underline">browse Tomboy Mine treasures</router-link>.</p>
      </div>
      <div v-else class="space-y-4">
        <div v-for="item in cart" :key="item.id" class="bg-white p-4 rounded-lg border flex justify-between items-center">
          <div>
            <h3 class="font-semibold">{{ item.name }}</h3>
            <p class="text-gray-600">${{ item.price }}</p>
          </div>
          <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700">Remove</button>
        </div>
        <div class="bg-white p-6 rounded-lg border mt-6">
          <h2 class="text-xl font-bold">Total: ${{ total }}</h2>
          <button class="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">Checkout with Square</button>
          <p class="text-sm text-gray-500 mt-2">Secure payments for your Savage Basin relics.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics'

const store = useRelicsStore()
const cart = store.cart
const total = store.getTotal

const removeFromCart = (id) => {
  store.cart = store.cart.filter(item => item.id !== id)
}
</script>