<template>
  <div class="mx-auto max-w-3xl px-4 py-12">
    <h1 class="font-serif text-4xl text-stone-900">Your Cart</h1>

    <p v-if="!cart.items.length" class="mt-10 text-lg text-stone-600">
      Your cart is empty. <router-link to="/shop" class="text-amber-700 underline">Browse specimens →</router-link>
    </p>

    <div v-else class="mt-8">
      <ul class="divide-y divide-stone-200 bg-white rounded-lg border border-stone-200">
        <li v-for="item in cart.items" :key="item.id" class="flex items-center gap-4 p-4">
          <router-link :to="`/shop/ore/${item.id}`"><img :src="item.image" :alt="item.name" class="h-20 w-20 rounded object-cover" /></router-link>
          <div class="flex-1">
            <router-link :to="`/shop/ore/${item.id}`" class="font-semibold text-stone-900 hover:underline">{{ item.name }}</router-link>
            <p class="text-sm text-stone-500">{{ item.subtitle }}</p>
          </div>
          <p class="font-semibold">{{ money(item.price) }}</p>
          <button @click="cart.remove(item.id)" class="ml-2 text-sm text-stone-500 hover:text-red-700">Remove</button>
        </li>
      </ul>

      <div class="mt-6 bg-white rounded-lg border border-stone-200 p-6 space-y-2">
        <div class="flex justify-between"><span>Subtotal</span><span>{{ money(cart.subtotal) }}</span></div>
        <div class="flex justify-between text-stone-600"><span>Shipping ({{ SITE.shippingLabel }})</span><span>{{ money(SITE.shippingFlat) }}</span></div>
        <div class="flex justify-between text-xl font-bold pt-2 border-t border-stone-200"><span>Total</span><span>{{ money(cart.subtotal + SITE.shippingFlat) }}</span></div>

        <button @click="checkout" :disabled="busy" class="mt-4 w-full bg-amber-500 text-stone-900 font-semibold py-4 rounded-lg hover:bg-amber-400 disabled:opacity-60">
          {{ busy ? 'Opening secure checkout…' : 'Checkout' }}
        </button>
        <p v-if="error" class="text-red-700 text-center">{{ error }}</p>
        <p class="text-xs text-stone-500 text-center">You'll pay on Square's secure checkout page and enter your shipping address there.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'
import { SITE } from '@/data/site'
import { money } from '@/utils/money'

const cart = useCartStore()
const busy = ref(false)
const error = ref('')

async function checkout() {
  busy.value = true
  error.value = ''
  try {
    const r = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: cart.ids }),
    })
    const data = await r.json().catch(() => ({}))
    if (r.ok && data.url) {
      window.location.href = data.url
      return
    }
    if (data.sold) {
      cart.soldIds = data.sold
      cart.ids = cart.ids.filter((i) => !data.sold.includes(i))
      cart.save()
    }
    error.value = data.error || 'Checkout is unavailable right now. Please try again shortly.'
  } catch {
    error.value = 'Checkout is unavailable right now. Please try again shortly.'
  }
  busy.value = false
}
</script>
