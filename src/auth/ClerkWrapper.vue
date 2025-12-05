<template>
  <ClerkProvider :publishable-key="key">
    <router-view />
  </ClerkProvider>
</template>

<script setup>
import { ClerkProvider } from '@clerk/clerk-vue';
const key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
</script>