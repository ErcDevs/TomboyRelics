<template>
  <div ref="clerkEl"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Clerk } from '@clerk/clerk-js'

const clerkEl = ref(null)

onMounted(() => {
  const clerk = new Clerk('pk_test_cHJlY2lvdXMtYm9hci01My5jbGVyay5hY2NvdW50cy5kZXYk')  // ← get from Clerk dashboard
  clerk.load({}).then(() => {
    clerk.mountUserButton(clerkEl.value)
  })
})
</script>