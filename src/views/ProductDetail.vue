<template>
  <div class="mx-auto max-w-6xl px-4 py-10">
    <router-link to="/shop" class="text-sm text-copper-300 hover:underline">← All specimens</router-link>

    <div v-if="ore" class="mt-6 grid gap-10 md:grid-cols-2">
      <ImageLightbox v-model:open="viewerOpen" v-model:index="viewerIndex" :images="gallery" :alt="ore.name" />
      <div>
        <button @click="openViewer" class="relative block w-full group" aria-label="Zoom photo">
          <img :src="current" :alt="ore.name" class="w-full aspect-square object-cover rounded-lg shadow bg-stone-800 cursor-zoom-in" />
          <span class="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-80 group-hover:opacity-100">🔍 Click any photo to zoom</span>
        </button>
        <div class="mt-3 grid grid-cols-5 gap-2">
          <button v-for="img in gallery" :key="img" @click="current = img; openViewer()"
            :class="['rounded overflow-hidden border-2', img === current ? 'border-copper-600' : 'border-transparent']">
            <img :src="img" :alt="ore.name" class="aspect-square w-full object-cover" loading="lazy" />
          </button>
        </div>
      </div>

      <div>
        <h1 class="font-serif text-3xl sm:text-4xl text-stone-100">{{ ore.name }}</h1>
        <p class="mt-2 text-stone-400">{{ ore.subtitle }}</p>
        <p class="mt-6 text-3xl font-bold text-copper-300">{{ money(ore.price) }}<span v-if="ore.unit" class="text-lg font-normal text-stone-400"> per {{ ore.unit }}</span></p>

        <div class="mt-6">
          <p v-if="sold" class="text-xl font-bold text-red-700">Sold</p>
          <template v-else-if="ore.unit">
            <div class="flex gap-3">
              <select v-model.number="pick" class="border border-stone-700 bg-stone-900 text-stone-100 rounded-lg px-3" aria-label="Quantity">
                <option v-for="n in Math.min(cart.left(ore.id), 20)" :key="n" :value="n">{{ n }} {{ ore.unit }}{{ n > 1 ? 's' : '' }}</option>
              </select>
              <button @click="cart.add(ore.id, pick)" class="flex-1 bg-copper-600 text-white font-semibold py-4 rounded-lg hover:bg-copper-700">Add to cart</button>
            </div>
            <router-link v-if="cart.has(ore.id)" to="/cart" class="mt-2 block text-sm text-copper-300 underline">{{ cart.qty[ore.id] }} in your cart – view cart</router-link>
          </template>
          <router-link v-else-if="cart.has(ore.id)" to="/cart" class="block text-center w-full bg-stone-800 text-white font-semibold py-4 rounded-lg hover:bg-stone-700">In your cart – View cart</router-link>
          <button v-else @click="cart.add(ore.id)" class="w-full bg-copper-600 text-white font-semibold py-4 rounded-lg hover:bg-copper-700">Add to cart</button>
          <p class="mt-2 text-xs text-stone-400">{{ ore.unit ? `${cart.left(ore.id)} available.` : 'One-of-a-kind.' }} Plus {{ money(SITE.shippingFlat) }} insured shipping per order.</p>
        </div>

        <dl class="mt-8 grid grid-cols-3 gap-y-2 text-sm border-t border-stone-800 pt-6">
          <template v-if="ore.weight"><dt class="text-stone-400">Weight</dt><dd class="col-span-2">{{ ore.weight }}</dd></template>
          <template v-if="ore.size"><dt class="text-stone-400">Size</dt><dd class="col-span-2">approx. {{ ore.size }}</dd></template>
          <dt class="text-stone-400">Minerals</dt><dd class="col-span-2">{{ ore.minerals.join(', ') }}</dd>
          <dt class="text-stone-400">Locality</dt><dd class="col-span-2">Tomboy claim, Savage Basin, San Miguel Co., Colorado</dd>
        </dl>

        <div class="mt-8 space-y-4 text-stone-300 leading-relaxed">
          <p class="whitespace-pre-line" v-for="(para, i) in ore.desc.split('\n\n')" :key="i">{{ para }}</p>
        </div>
      </div>
    </div>

    <p v-else class="mt-16 text-center text-xl text-stone-400">That specimen isn't available. <router-link to="/shop" class="text-copper-300 underline">See the shop</router-link></p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findOre } from '@/data/ore'
import { SITE } from '@/data/site'
import { useCartStore } from '@/stores/cart'
import { money } from '@/utils/money'
import ImageLightbox from '@/components/ImageLightbox.vue'

const route = useRoute()
const cart = useCartStore()
const ore = computed(() => findOre(route.params.id))
const sold = computed(() => ore.value && cart.isSold(ore.value.id))
const gallery = computed(() => (ore.value ? [ore.value.image, ...ore.value.images] : []))
const current = ref('')
const pick = ref(1)
const viewerOpen = ref(false)
const viewerIndex = ref(0)
function openViewer() {
  viewerIndex.value = Math.max(0, gallery.value.indexOf(current.value))
  viewerOpen.value = true
}
watch(ore, (o) => (current.value = o?.image || ''), { immediate: true })
</script>
