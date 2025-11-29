<template>
  <Disclosure
    as="nav"
    class="border-b border-gray-200 bg-white dark:border-white/10 dark:bg-gray-900"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <div class="flex shrink-0 items-center">
            <router-link to="/" class="text-2xl font-bold text-mining-brown dark:text-ore-gold">
              Tomboy Relics
            </router-link>
          </div>
          <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
            <router-link
              to="/"
              class="inline-flex items-center border-b-2 border-mining-brown px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Shop
            </router-link>
            <a
              href="/#about"
              class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              About
            </a>
          </div>
        </div>

        <!-- Desktop: Clerk Auth + Cart -->
        <div class="hidden sm:flex items-center space-x-4">
          <!-- CLERK USER BUTTON — AUTOMATIC SIGN IN / SIGN UP -->
          <div ref="clerkDesktop" class="clerk-user-button"></div>

          <!-- Cart Button -->
          <button
            @click="$emit('open-cart')"
            class="relative rounded-full bg-white dark:bg-gray-900 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <ShoppingCartIcon class="h-7 w-7" />
            <span
              v-if="cartCount"
              class="absolute -top-1 -right-1 bg-ore-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cartCount }}
            </span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bars3Icon v-if="!open" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 pb-3 pt-2">
        <DisclosureButton
          as="router-link"
          to="/"
          class="block border-l-4 border-mining-brown bg-mining-brown/10 py-2 pl-3 pr-4 text-base font-medium text-mining-brown"
        >
          Shop
        </DisclosureButton>
        <DisclosureButton
          as="a"
          href="/#about"
          class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 dark:text-gray-300"
        >
          About
        </DisclosureButton>
        <!-- Mobile Clerk Button -->
        <div ref="clerkMobile" class="clerk-user-button px-3 py-2"></div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'
import { computed, onMounted } from 'vue'
import { Clerk } from '@clerk/clerk-js'

const cart = useCartStore()
const cartCount = computed(() => cart.totalItems)

// CLERK SETUP
const clerkDesktop = ref(null)
const clerkMobile = ref(null)

onMounted(async () => {
  try {
    const clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
    
    await clerk.load({
      appearance: {
        elements: {
          formButtonPrimary: 'bg-ore-gold hover:bg-ore-gold/90 text-black',
          socialButtonsBlockButton: 'bg-mining-brown hover:bg-mining-brown/90 text-white'
        }
      }
    })

    // Mount desktop button
    if (clerkDesktop.value) {
      await clerk.mountUserButton(clerkDesktop.value)
    }

    // Mount mobile button
    if (clerkMobile.value) {
      await clerk.mountUserButton(clerkMobile.value)
    }

    console.log('✅ Clerk buttons mounted')
  } catch (error) {
    console.error('❌ Clerk failed:', error)
  }
})

defineEmits(['open-cart'])
</script>