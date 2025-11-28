<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold text-mining-brown hover:text-mining-brown/80">
          Tomboy Relics
        </router-link>

        <!-- Right side: Cart + Account -->
        <div class="flex items-center space-x-6">
          <!-- Cart Button -->
          <button @click="cartOpen = true" class="relative p-2 text-gray-700 hover:text-gray-900">
            <ShoppingCartIcon class="h-6 w-6" />
            <span
              v-if="cart.totalItems"
              class="absolute -top-1 -right-1 bg-ore-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cart.totalItems }}
            </span>
          </button>

          <!-- Clerk Account Button -->
          <AuthButton />
        </div>
      </div>
    </header>

    <main class="flex-1 bg-gray-50">
      <router-view />
    </main>

    <footer class="bg-gray-900 text-white py-8 text-center">
      <p>© 2025 TomboyRelics.com — Authentic mining relics from Savage Basin</p>
    </footer>

    <CartDrawer :is-open="cartOpen" @update:is-open="cartOpen = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AuthButton from '@/components/AuthButton.vue'
import CartDrawer from '@/components/CartDrawer.vue'
import { useCartStore } from '@/stores/cart'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'

const cartOpen = ref(false)
const cart = useCartStore()
</script>