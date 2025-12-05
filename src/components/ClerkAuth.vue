<template>
  <div ref="clerkRef"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Clerk } from '@clerk/clerk-js'

const clerkRef = ref(null)
let clerk = null

onMounted(async () => {
  try {
    clerk = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
    
    await clerk.load({
      appearance: {
        elements: {
          formButtonPrimary: 'bg-ore-gold hover:bg-ore-gold/90 text-black',
          socialButtonsBlockButton: 'bg-mining-brown hover:bg-mining-brown/90 text-white',
          formFieldInput: 'border-gray-300 focus:border-ore-gold focus:ring-ore-gold'
        }
      }
    })
    
    await clerk.mountUserButton(clerkRef.value)
    console.log('✅ Clerk user button mounted!')
  } catch (error) {
    console.error('❌ Clerk failed to load:', error)
  }
})

onUnmounted(() => {
  if (clerk) {
    clerk.unmount()
  }
})
</script>