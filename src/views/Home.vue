<template>
  <div>
    <section class="relative h-[70vh] min-h-[420px] bg-cover bg-center" style="background-image: url('/hero-tomboy-mine.jpg')">
      <div class="absolute inset-0 bg-stone-950/55 flex items-center justify-center">
        <div class="text-center text-white px-6 max-w-3xl">
          <p class="uppercase tracking-[0.3em] text-copper-300 text-sm">Savage Basin · Telluride, Colorado</p>
          <h1 class="font-serif text-5xl md:text-7xl mt-4">The Tomboy Mine</h1>
          <p class="mt-4 text-lg md:text-2xl text-stone-200">Gold, silver and copper ore from one of the great mines of the Telluride district, at 11,500 feet.</p>
          <router-link to="/shop" class="mt-8 inline-block bg-copper-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-copper-700">Shop ore specimens</router-link>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16">
      <div class="flex items-end justify-between">
        <h2 class="font-serif text-3xl text-stone-100">Featured specimens</h2>
        <router-link to="/shop" class="text-copper-300 hover:underline">View all →</router-link>
      </div>
      <div class="mt-8 grid gap-6 grid-cols-2 lg:grid-cols-4">
        <OreCard v-for="o in featured" :key="o.id" :ore="o" />
      </div>
    </section>

    <section class="bg-stone-900 border-y border-stone-800">
      <div class="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3 text-center">
        <div><p class="font-semibold text-stone-100">From the active Tomboy claim</p><p class="mt-2 text-stone-400">Each piece is hand-selected on the claim in Savage Basin by the claim holder.</p></div>
        <div><p class="font-semibold text-stone-100">Weighed and photographed</p><p class="mt-2 text-stone-400">Weight, size and close-up photos of the actual specimen you'll receive.</p></div>
        <div><p class="font-semibold text-stone-100">Secure checkout, insured shipping</p><p class="mt-2 text-stone-400">Pay through Square. Ships USPS Priority, insured, within 3 business days.</p></div>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-4 py-16 text-center">
      <h2 class="font-serif text-3xl text-stone-100">A Telluride legend</h2>
      <p class="mt-4 text-lg text-stone-300 leading-relaxed">
        The Tomboy began producing gold in earnest in 1894. In 1897 it was bought for $2 million by London's Exploration Company, backed by the Rothschild banking family, and it ranked with the Smuggler-Union and Liberty Bell as one of the three great mines of the Telluride district until it closed in 1928.
      </p>
      <router-link to="/history" class="mt-6 inline-block text-copper-300 hover:underline">Read the history →</router-link>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import OreCard from '@/components/OreCard.vue'
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
const featured = computed(() => [...cart.available].sort((a, b) => b.price - a.price).slice(0, 4))
</script>
