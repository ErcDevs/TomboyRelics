<template>
  <div ref="clerkContainer" class="relative"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Clerk } from '@clerk/clerk-js'

const clerkContainer = ref(null)
let clerkInstance = null

onMounted(async () => {
  try {
    clerkInstance = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
    
    await clerkInstance.load({
      appearance: {
        elements: {
          rootBox: 'flex justify-center',
          card: 'shadow-xl border-0'
        }
      }
    })
    
    // Mount user button
    await clerkInstance.mountUserButton(clerkContainer.value, {
      appearance: {
        elements: {
          userButtonPopoverCard: 'shadow-lg'
        }
      }
    })
    
    console.log('Clerk user button mounted successfully')
  } catch (error) {
    console.error('Clerk init failed:', error)
  }
})

onUnmounted(() => {
  if (clerkInstance) {
    clerkInstance.unmount()
  }
})
</script>