<template>
  <router-link to="/cart" class="relative inline-flex items-center hover:text-amber-300" aria-label="Cart">
    <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
      <path d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-2 5h13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
    <span v-if="cart.count" class="absolute -top-2 -right-3 bg-amber-400 text-stone-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{{ cart.count }}</span>
  </router-link>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>
