<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <h1 class="text-center text-4xl font-bold text-mining-brown mb-12">
        Tomboy Mine Relics & Ore
      </h1>

      <div
        class="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="product in products.items"
          :key="product.id"
          class="group relative border-r border-b border-gray-200 p-4 sm:p-6"
        >
          <router-link :to="product.href">
            <div class="aspect-square rounded-lg bg-gray-100 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="h-full w-full object-cover object-center group-hover:opacity-75 transition"
              />
            </div>

            <div class="pt-10 pb-4 text-center">
              <h3 class="text-sm font-medium text-gray-900">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ product.name }}
              </h3>
              <p class="mt-4 text-base font-medium text-ore-gold">
                ${{ product.price.toFixed(2) }}
              </p>
            </div>
          </router-link>

          <button
            @click="cart.addToCart(product)"
            class="w-full bg-mining-brown hover:bg-mining-brown/90 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const products = useProductsStore()
const cart = useCartStore()
</script>
