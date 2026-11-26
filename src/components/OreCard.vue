<template>
  <router-link :to="`/shop/ore/${ore.id}`" class="group block bg-stone-900 rounded-lg overflow-hidden border border-stone-800 hover:shadow-xl transition">
    <div class="aspect-square bg-stone-800 overflow-hidden">
      <img :src="ore.image" :alt="ore.name" loading="lazy" class="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
    </div>
    <div class="p-4">
      <h3 class="font-semibold text-stone-100 leading-snug">{{ ore.name }}</h3>
      <p class="text-sm text-stone-400 mt-1">{{ ore.subtitle }}</p>
      <p class="mt-3 text-lg font-bold text-copper-300">{{ money(ore.price) }}<span v-if="ore.unit" class="text-sm font-normal text-stone-400"> / {{ ore.unit }}</span></p>
    </div>
  </router-link>
</template>

<script setup>
import { money } from '@/utils/money'
defineProps({ ore: { type: Object, required: true } })
</script>
