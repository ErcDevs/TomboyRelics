<!-- src/views/EBayListingTool.vue — FINAL: Simple, 100% reliable -->
<template>
  <div class="min-h-screen bg-gray-900 py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-4xl font-black text-yellow-400 text-center mb-2">
        TOMBOY RELICS — PRIVATE eBay TOOL
      </h1>
      <p class="text-center text-gray-400 mb-12">
        Manual, but it never breaks.
      </p>

      <!-- Step 1: Upload Images (preview only) -->
      <div class="bg-gray-800 p-8 rounded-2xl shadow-2xl mb-12">
        <h2 class="text-2xl font-bold text-white mb-6">Step 1: Upload Images</h2>
        <input 
          type="file" 
          multiple 
          @change="handleImages" 
          class="w-full p-4 rounded bg-gray-700 text-white cursor-pointer mb-6"
        >

        <div v-if="imagePreviews.length" class="grid grid-cols-3 gap-4">
          <img v-for="(preview, i) in imagePreviews" :key="i" :src="preview" class="w-full rounded-lg shadow-md object-cover h-48">
        </div>
      </div>

      <!-- Step 2: Pricing Calculator -->
      <div class="bg-gray-800 p-8 rounded-2xl shadow-2xl mb-12">
        <h2 class="text-2xl font-bold text-white mb-6">Step 2: Calculate Price</h2>
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
            <input v-model.number="weight" type="number" step="0.1" class="w-full p-4 rounded bg-gray-700 text-white text-lg" placeholder="e.g. 137" />
          </div>
        </div>

        <div v-if="selectedOre && weight" class="grid md:grid-cols-3 gap-6 text-center">
          <div class="bg-gray-800 p-8 rounded-2xl">
            <div class="text-gray-400 text-sm uppercase">Low</div>
            <div class="text-4xl font-black text-gray-300 mt-2">${{ lowPrice }}</div>
          </div>
          <div class="bg-green-800 p-8 rounded-2xl shadow-xl transform scale-110">
            <div class="text-green-300 text-sm uppercase">Quick-Sale</div>
            <div class="text-5xl font-black text-white mt-2">${{ midPrice }}</div>
          </div>
          <div class="bg-yellow-800 p-8 rounded-2xl">
            <div class="text-yellow-300 text-sm uppercase">High</div>
            <div class="text-4xl font-black text-white mt-2">${{ highPrice }}</div>
          </div>
        </div>
      </div>

      <!-- Step 3: Generate Listing -->
      <div class="bg-gray-800 p-8 rounded-2xl shadow-2xl">
        <h2 class="text-2xl font-bold text-white mb-6">Step 3: Generate eBay Listing</h2>
        <div class="space-y-6">
          <div>
            <label class="block text-yellow-400 mb-2">Title</label>
            <input v-model="title" class="w-full p-4 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label class="block text-yellow-400 mb-2">Description</label>
            <textarea v-model="description" rows="10" class="w-full p-4 rounded bg-gray-700 text-white"></textarea>
          </div>
          <button @click="generateListing" class="w-full p-5 bg-yellow-500 text-gray-900 font-bold rounded-xl hover:bg-yellow-400 transition text-xl">
            GENERATE LISTING
          </button>
          <textarea v-if="listingText" rows="12" class="w-full p-4 rounded bg-gray-700 text-white mt-6" readonly>{{ listingText }}</textarea>
          <button v-if="listingText" @click="copyListing" class="w-full p-5 bg-green-500 text-gray-900 font-bold rounded-xl hover:bg-green-400 transition text-xl mt-4">
            COPY TO CLIPBOARD
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedFiles = ref([])
const imagePreviews = ref([])
const selectedOre = ref(null)
const weight = ref(null)
const title = ref('')
const description = ref('')
const listingText = ref('')

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

const lowPrice = computed(() => selectedOre.value && weight.value ? (selectedOre.value.low * weight.value).toFixed(2) : '0.00')
const midPrice = computed(() => selectedOre.value && weight.value ? (selectedOre.value.mid * weight.value).toFixed(2) : '0.00')
const highPrice = computed(() => selectedOre.value && weight.value ? (selectedOre.value.high * weight.value).toFixed(2) : '0.00')

const handleImages = (e) => {
  const files = Array.from(e.target.files)
  selectedFiles.value = files
  imagePreviews.value = files.map(file => URL.createObjectURL(file))
}

const generateListing = () => {
  listingText.value = `
Title: ${title.value || 'Authentic Tomboy Mine ' + (selectedOre.value?.name || '') + ' - ' + weight.value + 'g'}

Description:
${description.value || 'Stunning specimen from the legendary Tomboy Mine — see photos and analysis.'}

Price: $${midPrice.value}
Shipping: $8.00

Historical Info:
From the historic Tomboy Mine, Colorado's third richest gold mine (1894–1928). Real relic — not a replica.

Specs:
- Weight: ${weight.value}g
- Type: ${selectedOre.value?.name || 'Unknown'}
- Provenance: Savage Basin, Telluride, Colorado

Buy with confidence — 100% authentic Tomboy relic!
  `.trim()
}

const copyListing = () => {
  navigator.clipboard.writeText(listingText.value)
  alert('Copied to clipboard!')
}
</script>

<style scoped>
.hover\\:opacity-90:hover { opacity: 0.9; }
</style>