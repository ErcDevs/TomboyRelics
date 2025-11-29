<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader @open-cart="cartOpen = true" />

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
import AppHeader from '@/components/layout/AppHeader.vue'
import CartDrawer from '@/components/CartDrawer.vue'

const cartOpen = ref(false)
</script>