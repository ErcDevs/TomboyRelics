<!-- src/views/Cart.vue — FINAL: Remove releases reservation -->
 <!-- deploy Dec 14 2025 -->
<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="mx-auto max-w-4xl px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <!-- Empty Cart -->
      <div v-if="allCartItems.length === 0" class="text-center py-20">
        <p class="text-xl text-gray-600">
          Your cart is empty — 
          <router-link to="/shop" class="text-blue-600 hover:underline font-medium">
            browse Tomboy Mine treasures →
          </router-link>
        </p>
      </div>

      <!-- Cart Items -->
      <div v-else class="space-y-6">
        <div
          v-for="item in allCartItems"
          :key="item.id + '-' + item.source"
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
            @click="removeFromCart(item)"
            class="text-red-600 hover:text-red-800 font-medium transition"
          >
            Remove
          </button>
        </div>

        <!-- Checkout Section -->
        <div class="bg-white p-8 rounded-lg border mt-8 shadow-md">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Order Total</h2>
            <p class="text-3xl font-bold text-green-600">${{ totalPrice }}</p>
          </div>

          <!-- Signed-in notice -->
          <SignedIn>
            <p class="text-sm text-gray-600 mb-4">Shipping to your account address (editable below)</p>
          </SignedIn>

          <!-- Buyer Info Form (auto-filled if signed in) -->
          <div class="space-y-4 mb-6">
            <input v-model="buyer.name" placeholder="Full Name" required class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none" />
            <input v-model="buyer.email" type="email" placeholder="Email Address" required class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none" />
            <textarea v-model="buyer.address" placeholder="Shipping Address (include city, state, ZIP, country)" required class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none h-24"></textarea>
          </div>

          <!-- Square Card Form Container -->
          <div id="payment-form" class="mb-6 border rounded-lg p-4 bg-gray-50"></div>
          <div id="payment-errors" class="text-red-600 text-sm mb-4 min-h-[24px]"></div>

          <button
            @click="handleCheckout"
            :disabled="processing"
            class="w-full bg-green-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-green-700 transition shadow-lg disabled:opacity-50"
          >
            {{ processing ? 'Processing Payment...' : 'Pay with Square Securely' }}
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
import { useOreStore } from '@/stores/ore'
import { computed, ref, onMounted, watch } from 'vue'
import { useUser, SignedIn } from '@clerk/vue'

const relicsStore = useRelicsStore()
const oreStore = useOreStore()
const { user, isLoaded } = useUser()

const allCartItems = computed(() => [
  ...relicsStore.cart.map(item => ({ ...item, source: 'relics' })),
  ...oreStore.cart.map(item => ({ ...item, source: 'ore' }))
])

const totalPrice = computed(() => relicsStore.total + oreStore.total)

const removeFromCart = (item) => {
  // Remove from correct store
  if (item.source === 'ore') {
    const index = oreStore.cart.findIndex(i => i.id === item.id)
    if (index > -1) oreStore.cart.splice(index, 1)
  } else {
    const index = relicsStore.cart.findIndex(i => i.id === item.id)
    if (index > -1) relicsStore.cart.splice(index, 1)
  }

  // INSTANTLY RELEASE RESERVATION
  const inventoryItem = item.source === 'ore' 
    ? oreStore.items.find(i => i.id === item.id)
    : relicsStore.items.find(i => i.id === item.id)
  
  if (inventoryItem) {
    inventoryItem.reservedUntil = null
    inventoryItem.reservedBy = null
  }
}

// Square integration below — keeps old handleCheckout as fallback
const processing = ref(false)
let card = null

// Buyer info ref
const buyer = ref({ name: '', email: '', address: '' })

// Auto-fill from Clerk user when loaded/signed-in
watch(() => user.value, (currentUser) => {
  if (currentUser && isLoaded.value) {
    buyer.value.name = currentUser.fullName || (currentUser.firstName ? currentUser.firstName + ' ' + (currentUser.lastName || '') : '')
    buyer.value.email = currentUser.primaryEmailAddress?.emailAddress || ''
    buyer.value.address = ''  // Custom address not in Clerk yet – manual for now
  }
}, { immediate: true })

onMounted(async () => {
  if (allCartItems.value.length === 0) return

  // Dynamically load Square SDK (auto sandbox/prod via env)
  const script = document.createElement('script')
  script.src = import.meta.env.VITE_SQUARE_SDK_URL
  script.async = true
  script.onload = initializeSquare
  document.head.appendChild(script)
})

async function initializeSquare() {
  try {
    const payments = window.Square.payments(import.meta.env.VITE_SQUARE_APPLICATION_ID, import.meta.env.VITE_SQUARE_LOCATION_ID)
    card = await payments.card()
    await card.attach('#payment-form')
  } catch (err) {
    document.getElementById('payment-errors').textContent = 'Failed to load payment form. Please refresh.'
  }
}

const handleCheckout = async () => {
  if (!card) {
    // Fallback to old behavior if Square not loaded
    relicsStore.cart.forEach(item => {
      const inventoryItem = relicsStore.items.find(i => i.id === item.id)
      if (inventoryItem) inventoryItem.sold = true
    })
    oreStore.cart.forEach(item => {
      const inventoryItem = oreStore.items.find(i => i.id === item.id)
      if (inventoryItem) inventoryItem.sold = true
    })
    
    relicsStore.clearCart()
    oreStore.clearCart()
    alert('Thank you! Your relics are reserved. We’ll contact you for payment.')
    return
  }

  // Basic buyer validation
  if (!buyer.value.name || !buyer.value.email || !buyer.value.address) {
    document.getElementById('payment-errors').textContent = 'Please fill out your name, email, and shipping address.'
    return
  }

  processing.value = true
  document.getElementById('payment-errors').textContent = ''

  try {
    const result = await card.tokenize()
    if (result.status !== 'OK') {
      throw new Error('Card entry incomplete. Please check fields.')
    }

    const response = await fetch('/api/pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sourceId: result.token,
        amountMoney: { amount: Math.round(totalPrice.value * 100), currency: 'USD' },
        idempotencyKey: crypto.randomUUID(),
        buyerEmailAddress: buyer.value.email
      })
    })

    if (response.ok) {
      // SUCCESS: Mark sold, clear carts
      relicsStore.cart.forEach(item => {
        const inventoryItem = relicsStore.items.find(i => i.id === item.id)
        if (inventoryItem) inventoryItem.sold = true
      })
      oreStore.cart.forEach(item => {
        const inventoryItem = oreStore.items.find(i => i.id === item.id)
        if (inventoryItem) inventoryItem.sold = true
      })
      
      relicsStore.clearCart()
      oreStore.clearCart()
      alert('Payment successful! Thank you for purchasing authentic Tomboy Mine relics. We’ll ship soon.')
    } else {
      const err = await response.json()
      document.getElementById('payment-errors').textContent = err.error || 'Payment failed. Please try again.'
    }
  } catch (err) {
    document.getElementById('payment-errors').textContent = err.message || 'An error occurred.'
  } finally {
    processing.value = false
  }
}
</script>