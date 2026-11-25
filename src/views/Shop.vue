<template>
  <div class="mx-auto max-w-6xl px-4 py-12">
    <h1 class="font-serif text-4xl text-stone-900">Tomboy Ore Specimens</h1>
    <p class="mt-3 text-stone-600 max-w-2xl">
      Every piece is one-of-a-kind, hand-selected from the active Tomboy claim in Savage Basin, and photographed and weighed before listing.
      Flat {{ money(SITE.shippingFlat) }} insured shipping per order.
    </p>

    <div v-if="cart.available.length" class="mt-10 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <OreCard v-for="o in cart.available" :key="o.id" :ore="o" />
    </div>
    <p v-else class="mt-16 text-center text-xl text-stone-500">Everything has sold. New specimens are added regularly, so check back soon.</p>
  </div>
</template>

<script setup>
import OreCard from '@/components/OreCard.vue'
import { useCartStore } from '@/stores/cart'
import { SITE } from '@/data/site'
import { money } from '@/utils/money'
const cart = useCartStore()
</script>
