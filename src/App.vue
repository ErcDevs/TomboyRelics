<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header with cart count -->
    <AppHeader @open-cart="cartOpen = true" />

    <!-- ONLY ONE router-view IN THE ENTIRE APP -->
    <main class="flex-1 bg-gray-50">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 text-center">
      <p>© 2025 TomboyRelics.com — Authentic mining relics from Savage Basin</p>
    </footer>

    <!-- Cart Drawer -->
    <CartDrawer :is-open="cartOpen" @update:is-open="cartOpen = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import CartDrawer from '@/components/CartDrawer.vue'
import { useCartStore } from '@/stores/cart'

const cartOpen = ref(false)
const cart = useCartStore()  // ← This gives you cart.totalItems in the header
</script>