<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!-- Background overlay -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="$emit('close')"></div>

      <!-- Modal panel -->
      <div class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-6 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-xl font-semibold leading-6 text-gray-900" id="modal-title">
                Create Your Account
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  Save your shipping address and track orders
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div class="px-6 pb-6 sm:px-6">
          <form @submit.prevent="createAccount">
            <div class="space-y-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ore-gold focus:ring-ore-gold"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ore-gold focus:ring-ore-gold"
                  placeholder="John Doe"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            @click="createAccount"
            type="button"
            :disabled="creatingAccount"
            class="inline-flex w-full justify-center rounded-lg bg-ore-gold px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-ore-gold/90 disabled:opacity-50 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
          >
            {{ creatingAccount ? 'Creating...' : 'Create Account' }}
          </button>
          <button
            @click="$emit('close')"
            type="button"
            class="mt-3 inline-flex w-full justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm transition-colors"
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

defineProps(['isOpen'])
defineEmits(['close'])

const form = ref({
  email: '',
  name: ''
})

const creatingAccount = ref(false)

const createAccount = async () => {
  creatingAccount.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  alert(`Account created for ${form.value.name}! Welcome to Tomboy Relics.`)
  
  creatingAccount.value = false
  form.value = { email: '', name: '' }
  $emit('close')
}
</script>