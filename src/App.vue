<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header with working Sign In button -->
    <AppHeader @open-cart="handleOpenCart" @open-auth="handleOpenAuth" />

    <!-- Auth Modal -->
    <AuthModal v-if="showAuth" @close="showAuth = false" />

    <!-- Main content -->
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
import AuthModal from '@/components/AuthModal.vue'
import CartDrawer from '@/components/CartDrawer.vue'

const cartOpen = ref(false)
const showAuth = ref(false)

// EVENT HANDLERS — THESE MAKE BUTTONS WORK
const handleOpenCart = () => {
  cartOpen.value = true
}

const handleOpenAuth = () => {
  showAuth.value = true
}
</script>