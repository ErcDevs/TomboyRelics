<!-- src/views/Shop.vue — FINAL: Updated category images -->
<template>
  <div class="min-h-screen bg-gray-50 py-20">
    <div class="mx-auto max-w-7xl px-6 text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">Shop Tomboy Mine</h1>
      <p class="text-xl text-gray-600 mb-16">Authentic relics and ore from the third richest gold mine in Colorado</p>

      <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <!-- Relics Category -->
        <router-link to="/shop/relics" class="group">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <!-- ← YOUR NEW RELICS IMAGE -->
            <div class="h-96 bg-cover bg-center" style="background-image: url('/relics-category.jpg')"></div>
            <div class="p-10">
              <h2 class="text-4xl font-bold text-gray-900 mb-4">Authentic Tomboy Relics</h2>
              <p class="text-lg text-gray-600">Historic mining tools, equipment, and artifacts from 1894–1928</p>
            </div>
          </div>
        </router-link>

        <!-- Ore Category -->
        <router-link to="/shop/ore" class="group">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <!-- ← YOUR NEW ORE IMAGE -->
            <div class="h-96 bg-cover bg-center" style="background-image: url('/ore-category.jpg')"></div>
            <div class="p-10">
              <h2 class="text-4xl font-bold text-gray-900 mb-4">High-Grade Tomboy Ore</h2>
              <p class="text-lg text-gray-600">Hand-selected gold-bearing ore specimens with visible gold</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>