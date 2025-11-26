<template>
  <div class="bg-white min-h-screen py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Image -->
        <div class="aspect-square rounded-xl bg-gray-100 overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-cover object-center"
          />
        </div>

        <!-- Info -->
        <div>
          <h1 class="text-4xl font-bold text-gray-900">{{ product.name }}</h1>
          <p class="mt-6 text-4xl font-bold text-ore-gold">${{ product.price.toFixed(2) }}</p>

          <p class="mt-8 text-lg text-gray-600">{{ product.description }}</p>

          <button
            @click="cart.addToCart(product)"
            class="mt-10 w-full bg-mining-brown hover:bg-mining-brown/90 text-white font-bold py-4 rounded-lg text-lg"
          >
            Add to Cart
          </button>

          <div class="mt-16 border-t pt-10">
            <h2 class="text-xl font-semibold text-gray-900">Details</h2>
            <ul class="mt-6 space-y-3 text-gray-600">
              <li v-for="detail in product.details" :key="detail" class="flex">
                <span class="ml-3">{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const route = useRoute()
const products = useProductsStore()
const cart = useCartStore()

const product = computed(() => {
  return products.items.find((p) => p.id === Number(route.params.id)) || products.items[0]
})
</script>
