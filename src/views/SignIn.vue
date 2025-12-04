<template>
  <SignedIn>
    <Navigate to="/">
      <p>You're signed in! Head to relics.</p>
    </Navigate>
  </SignedIn>
  <SignedOut>
    <SignIn />
  </SignedOut>
</template>

<script setup>
import { SignedIn, SignedOut, SignIn, Navigate } from '@clerk/clerk-vue';
</script>