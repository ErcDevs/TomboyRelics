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
            :disabled="processing || cart.items.length === 0"
            class="w-full bg-mining-brown hover:bg-mining-brown/90 disabled:opacity-50 text-white font-bold py-4 rounded-lg text-lg transition"
          >
            {{ processing ? 'Processing...' : `Pay $${cart.totalPrice.toFixed(2)}` }}
          </button>

          <p v-if="error" class="text-red-600 text-center mt-4 font-medium">{{ error }}</p>
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
    if (!window.Square) {
      error.value = 'Square SDK failed to load. Please refresh.'
      return
    }

    // AUTO PICK SANDBOX OR PRODUCTION BASED ON URL
    const isDev = window.location.hostname.includes('dev')
    const config = isDev 
      ? window.SQUARE_CONFIG.sandbox 
      : window.SQUARE_CONFIG.production

    const payments = window.Square.payments(config.applicationId, config.locationId)
    card = await payments.card({
      style: {
        '.input-container': { border: '1px solid #d1d5db' },
      }
    })
    await card.attach('#card-container')
    console.log('Square card attached:', isDev ? 'SANDBOX' : 'PRODUCTION')
  } catch (err) {
    console.error('Square init error:', err)
    error.value = 'Payment form failed to load. Please refresh.'
  }
})

async function pay() {
  if (!card || cart.items.length === 0) return

  processing.value = true
  error.value = ''

  try {
    const result = await card.tokenize()
    if (result.status === 'OK') {
      console.log('Token created:', result.token)
      alert('Payment successful! Thank you for your order.')
      cart.clear()
      router.push('/')
    } else {
      error.value = result.errors?.[0]?.message || 'Payment failed.'
    }
  } catch (err) {
    error.value = 'Payment error. Please try again.'
    console.error(err)
  } finally {
    processing.value = false
  }
}
</script>