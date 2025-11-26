<template>
  <div ref="clerk"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Clerk } from '@clerk/clerk-js'

const clerk = ref(null)

onMounted(() => {
  const clerkInstance = new Clerk(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY)
  
  clerkInstance.load({
    appearance: {
      elements: {
        rootBox: 'flex justify-center',
        card: 'shadow-none',
      }
    }
  }).then(() => {
    clerkInstance.mountSignIn(clerk.value)
  })
})
</script>