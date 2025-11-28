<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header with working Sign In button -->
    <AppHeader @open-cart="handleOpenCart" @open-auth="handleOpenAuth" />

    <!-- DEBUG: Show modal state -->
    <div class="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
      Modal State: {{ showAuth ? 'OPEN' : 'CLOSED' }}
    </div>

    <!-- Auth Modal -->
    <AuthModal v-if="showAuth" @close="handleCloseAuth" />

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

// DEBUGGING FUNCTIONS WITH CONSOLE LOGS
const handleOpenCart = () => {
  console.log('🛒 Cart button clicked')
  cartOpen.value = true
}

const handleOpenAuth = () => {
  console.log('👤 SIGN IN BUTTON CLICKED!')
  console.log('showAuth before:', showAuth.value)
  showAuth.value = true
  console.log('showAuth after:', showAuth.value)
}

const handleCloseAuth = () => {
  console.log('❌ Close auth clicked')
  showAuth.value = false
}
</script>