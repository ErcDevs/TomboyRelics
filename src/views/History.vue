<!-- src/views/History.vue — FIXED IMAGE PATHS (tested) -->
<template>
  <div class="py-20 bg-white">
    <div class="mx-auto max-w-6xl px-6">
      <h1 class="text-5xl font-bold text-center text-gray-900 mb-12">The Tomboy Mine Legacy</h1>
      
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <img src="/history-1.jpg" alt="Tomboy Mine in operation" class="rounded-xl shadow-lg" />
        <div class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-6">Third Richest in Colorado</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            From 1894–1928, the Tomboy produced over $8 million in gold at a time when gold was $20/oz. 
            Only the Cripple Creek and Smuggler-Union mines produced more.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <img v-for="n in 6" :key="n" :src="`/gallery-${n}.jpg`" class="rounded-lg shadow hover:shadow-xl transition" />
      </div>
    </div>
  </div>
</template>