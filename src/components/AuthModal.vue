<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="close"></div>

      <!-- Modal panel -->
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                Sign in to your account
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Save your address, track orders, and get exclusive relic updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            @click="createAccount"
            class="inline-flex w-full justify-center rounded-md bg-ore-gold px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-ore-gold/80 sm:ml-3 sm:w-auto"
          >
            Create Account
          </button>
          <button
            @click="close"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])
const isOpen = ref(true)

const close = () => {
  emit('close')
}

const createAccount = () => {
  alert('Account created! Welcome to Tomboy Relics.')
  close()
}
</script>