<template>
  <div class="mx-auto max-w-2xl px-4 py-20 text-center">
    <h1 class="font-serif text-4xl text-stone-900">Thank you for your order</h1>
    <p class="mt-6 text-lg text-stone-700">Square has emailed your receipt. Your specimen will be packed carefully and shipped within 3 business days, and you'll get a tracking number by email.</p>
    <router-link to="/shop" class="mt-10 inline-block text-copper-600 underline">Back to the shop</router-link>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
onMounted(() => useCartStore().clear())
</script>
