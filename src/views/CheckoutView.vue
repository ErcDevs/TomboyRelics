<template>
  <div class="bg-gray-50 py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-center text-mining-brown mb-8">Checkout</h1>
      <div class="max-w-2xl mx-auto">
        <!-- Cart Empty -->
        <div v-if="cart.items.length === 0" class="text-center py-16 text-gray-500">
          Your cart is empty. <router-link to="/" class="text-ore-gold underline">Shop now</router-link>
        </div>

        <!-- Order Summary -->
        <div v-else class="bg-white rounded-lg shadow p-6 mb-6">
          <div v-for="item in cart.items" :key="item.id" class="flex justify-between py-4 border-b last:border-0">
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
          <div id="card-container" class="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 min-h-32"></div>
          <button
            @click="pay"
            :disabled="processing || cart.items.length === 0 || !cardReady"
            class="w-full bg-mining-brown hover:bg-mining-brown/90 disabled:opacity-50 text-white font-bold py-4 rounded-lg text-lg transition"
          >
            {{ processing ? 'Processing...' : `Pay $${cart.totalPrice.toFixed(2)}` }}
          </button>
          <p v-if="error" class="text-red-600 text-center mt-4 font-medium">{{ error }}</p>
          <p v-if="!cardReady && !error" class="text-yellow-600 text-center mt-4">Loading payment form... (refresh if stuck)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()
const processing = ref(false)
const error = ref('')
const cardReady = ref(false)
let card = null

// Retry function to wait for SDK load and attach
const initSquare = async (maxRetries = 5) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await nextTick()  // Wait for DOM

      if (!window.Square) {
        console.log(`SDK load attempt ${attempt} — waiting 1s...`)
        await new Promise(resolve => setTimeout(resolve, 1000))
        continue
      }

      // Auto-pick sandbox or production
      const isDev = window.location.hostname.includes('dev') || window.location.hostname.includes('localhost')
      const config = isDev ? window.SQUARE_CONFIG.sandbox : window.SQUARE_CONFIG.production

      if (!config.applicationId || !config.locationId) {
        throw new Error('Missing Square config — check public/config.js')
      }

      console.log('Using environment:', isDev ? 'SANDBOX' : 'PRODUCTION')
      console.log('App ID prefix:', config.applicationId.substring(0, 10) + '...')

      const payments = window.Square.payments(config.applicationId, config.locationId)
      card = await payments.card({
        style: { '.input-container': { border: '1px solid #d1d5db' } }
      })
      await card.attach('#card-container')
      cardReady.value = true
      console.log('Square card attached successfully!')
      return true
    } catch (err) {
      console.error(`SDK init attempt ${attempt} failed:`, err)
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
      }
    }
  }
  error.value = 'Square SDK failed to load after retries. Please refresh or check console.'
  return false
}

onMounted(async () => {
  await initSquare()
})

async function pay() {
  if (!card || !cardReady || cart.items.length === 0) {
    error.value = 'Payment form not ready or cart empty. Please refresh.'
    return
  }

  processing.value = true
  error.value = ''

  try {
    const result = await card.tokenize()

    if (result.status === 'OK') {
      console.log('Token created:', result.token)
      // TODO: Send token to backend for charging (Cloudflare Worker)
      alert('Payment successful! Thank you for your order.')
      cart.clear()
      router.push('/')
    } else {
      error.value = result.errors?.[0]?.message || 'Payment failed.'
      console.error('Tokenize error:', result.errors)
    }
  } catch (err) {
    error.value = 'Payment error. Please try again.'
    console.error('Tokenize catch:', err)
  } finally {
    processing.value = false
  }
}
</script>