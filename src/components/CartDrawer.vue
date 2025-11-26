<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="close" class="relative z-50">
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              enter="transform transition ease-in-out duration-500"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900"
                        >Shopping cart</DialogTitle
                      >
                      <button @click="close" class="text-gray-400 hover:text-gray-500">
                        <XMarkIcon class="h-6 w-6" />
                      </button>
                    </div>

                    <div class="mt-8">
                      <div v-if="cart.items.length === 0" class="text-center py-12 text-gray-500">
                        Your cart is empty
                      </div>
                      <ul v-else role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="item in cart.items" :key="item.id" class="flex py-6">
                          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                            <img
                              :src="item.image"
                              :alt="item.name"
                              class="h-full w-full object-cover"
                            />
                          </div>
                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>{{ item.name }}</h3>
                                <p class="ml-4">${{ (item.price * item.quantity).toFixed(2) }}</p>
                              </div>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Qty {{ item.quantity }}</p>
                              <button
                                @click="cart.removeItem(item.id)"
                                class="font-medium text-mining-brown hover:text-mining-brown/80"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div v-if="cart.items.length" class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p class="text-ore-gold">${{ cart.totalPrice.toFixed(2) }}</p>
                    </div>
                    <div class="mt-6">
                      <router-link
                        to="/checkout"
                        @click="close"
                        class="flex items-center justify-center rounded-md border border-transparent bg-mining-brown px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-mining-brown/90"
                      >
                        Checkout
                      </router-link>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'

defineProps({ isOpen: Boolean })
const emit = defineEmits(['update:isOpen'])
const cart = useCartStore()

function close() {
  emit('update:isOpen', false)
}
</script>
