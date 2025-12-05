<!-- src/views/Home.vue — FINAL FIXED VERSION (remove nested router-view) -->
<template>
  <div class="min-h-screen bg-gray-50 py-12 text-center">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">Tomboy Mine Relics</h1>
      <p class="text-xl text-gray-600 mb-12">
        Historic mining treasures from Savage Basin, Colorado — exclusively available here.
      </p>
      <router-link
        to="/products"
        class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
      >
        Shop All Relics →
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No script needed — just a landing page
</script>