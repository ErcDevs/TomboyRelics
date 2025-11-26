<template>
  <div class="bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-center text-mining-brown">Checkout</h1>
      <div class="mt-8 max-w-2xl mx-auto">
        <!-- Order Summary -->
        <div v-if="cart.items.length === 0" class="text-center py-8 text-gray-500">
          Your cart is empty. <router-link to="/" class="text-ore-gold underline">Continue shopping</router-link>
        </div>
        <div v-else class="bg-white rounded-lg shadow p-6 mb-6">
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
        </div>

        <!-- Square Card Form -->
        <div class="bg-white rounded-lg shadow p-6">
          <div id="card-container" class="border rounded p-3 mb-4"></div>
          <button
            @click="pay"
            :disabled="processing"
            class="w-full bg-mining-brown hover:bg-mining-brown/90 disabled:opacity-50 text-white font-bold py-4 rounded-lg text-lg transition"
          >
            {{ processing ? 'Processing...' : `Pay $${cart.totalPrice.toFixed(2)}` }}
          </button>
          <p v-if="error" class="text-red-600 text-center mt-4">{{ error }}</p>
        </div>
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
const processing = ref(false)
const error = ref('')
let card = null

onMounted(async () => {
  try {
    // Load Square SDK
    if (!window.Square) {
      console.error('Square SDK not loaded')
      error.value = 'Payment system not available. Please refresh the page.'
      return
    }

    // Use sandbox for testing, production for live
    const payments = window.Square.payments('sq0idp-YOUR_SANDBOX_APP_ID', 'YOUR_SANDBOX_LOCATION_ID')  // Replace with real keys

    card = await payments.card()
    await card.attach('#card-container')

    console.log('Card attached successfully')  // Check browser console for this
  } catch (err) {
    console.error('Card attach error:', err)
    error.value = 'Payment form failed to load. Please refresh.'
  }
})

async function pay() {
  if (cart.items.length === 0) {
    error.value = 'Cart is empty.'
    return
  }

  if (!card) {
    error.value = 'Payment form not ready. Please refresh.'
    return
  }

  processing.value = true
  error.value = ''

  try {
    const result = await card.tokenize()

    if (result.status === 'OK') {
      console.log('Token created:', result.token)  // Check console for token

      // TODO: Send token to your backend (Cloudflare Worker) for charging
      // For now, simulate success
      alert('Payment successful! Thank you for your order.')
      cart.clear()
      router.push('/')
    } else {
      console.error('Tokenize error:', result.errors)
      error.value = result.errors ? result.errors[0].message : 'Payment failed. Please try again.'
    }
  } catch (err) {
    console.error('Tokenize catch error:', err)
    error.value = 'Payment error. Please try again.'
  } finally {
    processing.value = false
  }
}
</script>