<template>
  <div class="mx-auto max-w-2xl px-4 py-12 text-stone-300">
    <h1 class="font-serif text-4xl text-stone-100">Contact</h1>
    <p class="mt-4 leading-relaxed">Questions about a specimen, an order, or the Tomboy? Send a message and we'll reply by email, usually within two business days.</p>

    <div v-if="status === 'sent'" class="mt-8 rounded-lg border border-copper-600 bg-stone-900 p-6">
      <p class="text-lg text-stone-100">Thanks, your message was sent.</p>
      <p class="mt-2">We'll reply to {{ sentTo }} soon.</p>
      <router-link to="/shop" class="mt-6 inline-block text-copper-300 underline">Back to the shop</router-link>
    </div>

    <form v-else @submit.prevent="send" class="mt-8 space-y-5">
      <div>
        <label for="c-name" class="block text-sm uppercase tracking-wider text-stone-400">Name</label>
        <input id="c-name" v-model.trim="form.name" required autocomplete="name" maxlength="100" class="field" />
      </div>
      <div>
        <label for="c-email" class="block text-sm uppercase tracking-wider text-stone-400">Your email</label>
        <input id="c-email" v-model.trim="form.email" type="email" required autocomplete="email" maxlength="200" class="field" />
      </div>
      <div>
        <label for="c-msg" class="block text-sm uppercase tracking-wider text-stone-400">Message</label>
        <textarea id="c-msg" v-model.trim="form.message" required rows="6" maxlength="5000" class="field"></textarea>
      </div>
      <!-- Spam trap: hidden from people, bots tend to fill it in -->
      <input v-model="form._honey" type="text" name="_honey" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

      <p v-if="status === 'error'" class="text-red-400">Sorry, the message didn't go through. Please try again, or email <a :href="`mailto:${SITE.contactEmail}`" class="underline">{{ SITE.contactEmail }}</a>.</p>

      <button type="submit" :disabled="status === 'sending'" class="rounded bg-copper-500 px-6 py-3 font-semibold text-stone-950 hover:bg-copper-300 disabled:opacity-60">
        {{ status === 'sending' ? 'Sending…' : 'Send message' }}
      </button>
    </form>

    <p class="mt-10 text-sm text-stone-400">You can also email <a :href="`mailto:${SITE.contactEmail}`" class="text-copper-300 underline">{{ SITE.contactEmail }}</a> directly. Shipping and return details are on the <router-link to="/shipping-returns" class="text-copper-300 underline">policies page</router-link>.</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { SITE } from '@/data/site'

const form = reactive({ name: '', email: '', message: '', _honey: '' })
const status = ref('idle')
const sentTo = ref('')

async function send() {
  if (form._honey) { status.value = 'sent'; return }
  status.value = 'sending'
  try {
    // FormSubmit forwards the message to the site inbox. No account needed.
    const res = await fetch(`https://formsubmit.co/ajax/${SITE.contactEmail}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _replyto: form.email,
        _subject: `Tomboy Relics message from ${form.name}`,
        _template: 'box',
        _captcha: 'false',
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'send failed')
    sentTo.value = form.email
    Object.assign(form, { name: '', email: '', message: '' })
    status.value = 'sent'
  } catch (e) {
    console.error(e)
    status.value = 'error'
  }
}
</script>

<style scoped>
.field { @apply mt-1 w-full rounded border border-stone-700 bg-stone-900 px-3 py-2 text-stone-100 focus:border-copper-300 focus:outline-none; }
</style>
