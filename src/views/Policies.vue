<template>
  <div class="mx-auto max-w-3xl px-4 py-12 space-y-10 text-stone-300 leading-relaxed">
    <h1 class="font-serif text-4xl text-stone-100">Shipping, Returns &amp; Contact</h1>

    <section>
      <h2 class="text-2xl font-semibold text-stone-100">Shipping</h2>
      <p class="mt-3">Flat {{ money(SITE.shippingFlat) }} per order, sent {{ SITE.shippingLabel }}. Orders ship within 3 business days, and Square emails you the tracking number. Specimens are wrapped individually and boxed with padding.</p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-stone-100">Returns</h2>
      <p class="mt-3">If a specimen arrives damaged or isn't as described, email us within {{ SITE.returnDays }} days of delivery with a photo. Return it in its original condition and we'll refund the full price, including shipping. Because each piece is photographed in detail, we don't accept returns for change of mind.</p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-stone-100">Authenticity</h2>
      <p class="mt-3">Every specimen was collected on the active Tomboy mining claim in Savage Basin, San Miguel County, Colorado. The weights and photos on each listing are of the actual piece you'll receive. Mineral identifications are visual, not lab-tested, unless the listing says otherwise.</p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-stone-100">Contact</h2>
      <p class="mt-3" v-if="SITE.contactEmail">Use the <router-link to="/contact" class="text-copper-300 underline">contact form</router-link> or email <a :href="`mailto:${SITE.contactEmail}`" class="text-copper-300 underline">{{ SITE.contactEmail }}</a>. We usually reply within two business days.</p>
      <p class="mt-3" v-else>Reply to your Square receipt email and it will reach us.</p>
    </section>
  </div>
</template>

<script setup>
import { SITE } from '@/data/site'
import { money } from '@/utils/money'
</script>
