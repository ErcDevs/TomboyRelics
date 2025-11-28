<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header with Logo, Nav, Cart, and Sign In -->
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold text-mining-brown hover:text-mining-brown/80">
          Tomboy Relics
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <router-link
            to="/"
            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-900"
          >
            Shop
          </router-link>
          <a
            href="/#about"
            class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-900"
          >
            About
          </a>
        </div>

        <!-- Right side: Sign In + Cart -->
        <div class="flex items-center space-x-4">
          <!-- Sign In Button -->
          <button
            @click="showAuth = true"
            class="hidden sm:inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mining-brown"
          >
            Sign In
          </button>

          <!-- Cart Button -->
          <button 
            @click="cartOpen = true" 
            class="relative p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mining-brown"
          >
            <ShoppingCartIcon class="h-6 w-6" />
            <span
              v-if="cart.totalItems > 0"
              class="absolute -top-1 -right-1 bg-ore-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cart.totalItems }}
            </span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="sm:hidden -mr-2 flex items-center">
          <button
            @click="mobileMenuOpen = true"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mining-brown"
          >
            <Bars3Icon class="h-6 w-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="sm:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium text-mining-brown"
          >
            Shop
          </router-link>
          <a href="/#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </a>
          <button
            @click="showAuth = true"
            class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>

    <!-- Auth Modal -->
    <AuthModal v-if="showAuth" @close="showAuth = false" />

    <!-- Main Content -->
    <main class="flex-1 bg-gray-50">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 text-center">
      <p class="text-sm">© 2025 TomboyRelics.com — Authentic mining relics from Savage Basin</p>
    </footer>

    <!-- Cart Drawer -->
    <CartDrawer :is-open="cartOpen" @update:is-open="cartOpen = $event" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import AppHeader from '@/components/layout/AppHeader.vue'  // Remove this - we're doing header inline
import CartDrawer from '@/components/CartDrawer.vue'
import AuthModal from '@/components/AuthModal.vue'  // Create this file
import { useCartStore } from '@/stores/cart'

const cartOpen = ref(false)
const showAuth = ref(false)
const mobileMenuOpen = ref(false)
const cart = useCartStore()

// Close mobile menu when clicking outside
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>