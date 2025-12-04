<template>
  <div class="py-8 px-4">
    <h2 class="text-3xl font-bold mb-6">Relic Inventory</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RelicCard v-for="relic in relics" :key="relic.id" :relic="relic" />
    </div>
  </div>
</template>

<script setup>
import { useRelicsStore } from '@/stores/relics';
import RelicCard from '@/components/RelicCard.vue';
const store = useRelicsStore();
const relics = store.items;
</script>