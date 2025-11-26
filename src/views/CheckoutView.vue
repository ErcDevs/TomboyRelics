<template>
  <div class="bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-center text-mining-brown">Checkout</h1>
      <div class="mt-8 max-w-2xl mx-auto">
        <div v-for="item in cart.items" :key="item.id" class="flex justify-between py-4 border-b">
          <div>
            <h3 class="font-medium">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">Qty: {{ item.quantity }}</p>
          </div>
          <p class="font-semibold">${{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>
        <div class="mt-6 text-right text-2xl font-bold text-ore-gold">
          Total: ${{ cart.totalPrice.toFixed(2) }}
        </div>
        <div id="card-container" class="mt-8 p-4 border rounded-lg"></div>
        <button
          @click="pay"
          class="mt-4 w-full bg-mining-brown text-white py-3 rounded-lg hover:bg-mining-brown/90"
        >
          Pay Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()
let card

onMounted(async () => {
  const payments = window.Square.payments('sq0idp-YOUR_APP_ID', 'L2YOUR_LOCATION_ID')
  card = await payments.card()
  await card.attach('#card-container')
})

async function pay() {
  const result = await card.tokenize()
  if (result.status === 'OK') {
    alert('Payment successful!')
    cart.clear()
    router.push('/')
  }
}
</script>
