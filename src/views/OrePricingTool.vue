<!-- src/views/OrePricingTool.vue — FINAL UPGRADE: Low / Mid / High prices -->
<template>
  <div class="min-h-screen bg-gray-900 py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-black text-yellow-400 text-center mb-2">
        TOMBOY RELICS — PRIVATE PRICING CALCULATOR
      </h1>
      <p class="text-center text-gray-400 mb-12">
        Only you can see this page — instant pricing for eBay / site
      </p>

      <!-- Instant Calculator -->
      <div class="bg-gray-800 p-8 rounded-2xl shadow-2xl mb-12">
        <h2 class="text-2xl font-bold text-white mb-6">Instant Price Calculator</h2>
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <label class="block text-yellow-400 mb-2">Ore Type</label>
            <select v-model="selectedOre" class="w-full p-4 rounded bg-gray-700 text-white text-lg">
              <option value="" disabled>Select ore type</option>
              <option v-for="ore in oreTypes" :key="ore.name" :value="ore">
                {{ ore.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-yellow-400 mb-2">Weight (grams)</label>
            <input
              v-model.number="weight"
              type="number"
              step="0.1"
              placeholder="e.g. 137"
              class="w-full p-4 rounded bg-gray-700 text-white text-lg"
            />
          </div>
        </div>

        <!-- Price Results -->
        <div v-if="selectedOre && weight" class="grid md:grid-cols-3 gap-6 text-center">
          <div class="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl">
            <div class="text-gray-400 text-sm uppercase tracking-wider">Low Price</div>
            <div class="text-4xl font-black text-gray-300 mt-2">
              ${{ lowPrice }}
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-700 to-green-900 p-8 rounded-2xl shadow-xl transform scale-110">
            <div class="text-green-300 text-sm uppercase tracking-wider">Quick-Sale Price</div>
            <div class="text-5xl font-black text-white mt-2">
              ${{ midPrice }}
            </div>
            <div class="text-green-200 text-lg mt-3">Sells Fast</div>
          </div>

          <div class="bg-gradient-to-br from-yellow-700 to-orange-800 p-8 rounded-2xl">
            <div class="text-yellow-300 text-sm uppercase tracking-wider">High Price</div>
            <div class="text-4xl font-black text-white mt-2">
              ${{ highPrice }}
            </div>
          </div>
        </div>

        <div v-else class="text-center text-gray-500 py-12 text-xl">
          Select an ore type and enter weight to see prices
        </div>
      </div>

      <!-- Full Price Table -->
      <h2 class="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Master Price per Gram Table (Your Eyes Only)
      </h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-800 border border-gray-700 rounded-lg">
          <thead>
            <tr class="bg-gray-700">
              <th class="px-6 py-4 text-left text-yellow-400">Ore Type</th>
              <th class="px-6 py-4 text-center text-gray-300">Low $/g</th>
              <th class="px-6 py-4 text-center text-green-400 font-bold">Mid $/g</th>
              <th class="px-6 py-4 text-center text-gray-300">High $/g</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-700">
            <tr v-for="ore in oreTypes" :key="ore.name" class="hover:bg-gray-750 transition">
              <td class="px-6 py-4 text-white font-medium">{{ ore.name }}</td>
              <td class="px-6 py-4 text-center text-gray-400">${{ ore.low.toFixed(2) }}</td>
              <td class="px-6 py-4 text-center text-green-400 font-bold">${{ ore.mid.toFixed(2) }}</td>
              <td class="px-6 py-4 text-center text-gray-400">${{ ore.high.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const weight = ref(null)
const selectedOre = ref(null)

const oreTypes = [
  { name: "Quartz Vein Ore — The Richest", low: 2.50, mid: 4.50, high: 8.00 },
  { name: "Oxidized Gossan Sulfide Ore", low: 0.75, mid: 1.50, high: 2.25 },
  { name: "Black Hardrock Galena Ore", low: 0.90, mid: 1.80, high: 2.25 },
  { name: "Bornite on Quartz Ore", low: 1.33, mid: 2.50, high: 4.00 },
  { name: "Hard Rock Sulfide Ore", low: 0.60, mid: 1.20, high: 1.75 },
  { name: "Quartz Matrix Sulfide Ore", low: 0.90, mid: 1.80, high: 2.75 },
  { name: "Native Gold in Oxidized Black Sulfide Ore", low: 2.00, mid: 4.00, high: 6.00 },
  { name: "Brecciated Quartz with Sulfide Inclusions", low: 2.00, mid: 4.00, high: 6.00 },
  { name: "Pyrite-Quartz Vein Ore with Chalcopyrite", low: 1.33, mid: 2.50, high: 4.00 },
  { name: "Heavy Red-Black Oxidized Telluride Ore", low: 3.28, mid: 5.50, high: 6.93 },
]

const lowPrice = computed(() => {
  if (!selectedOre.value || !weight.value) return '0.00'
  return (selectedOre.value.low * weight.value).toFixed(2)
})

const midPrice = computed(() => {
  if (!selectedOre.value || !weight.value) return '0.00'
  return (selectedOre.value.mid * weight.value).toFixed(2)
})

const highPrice = computed(() => {
  if (!selectedOre.value || !weight.value) return '0.00'
  return (selectedOre.value.high * weight.value).toFixed(2)
})
</script>

<style scoped>
.hover\:opacity-90:hover { opacity: 0.9; }
</style>