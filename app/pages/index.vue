<script setup>
  const { data } = await useFetch('/api/fetch-img')
</script>


<template>
  <section class="max-w-5xl mx-auto px-4 py-12">
    <div class="text-center mt-30 mb-50">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Thijs.dev
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        A simple, responsive layout built with Nuxt 3 and TailwindCSS. 
        Perfect as a base for landing pages or apps.
      </p>
    </div>

    <!-- Grid Section -->
    <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
      <div 
        v-for="file in data?.files"
        :key="file"
        class="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
        <img :src="`../assets/img/${file}`" :alt="file" class="w-full h-auto rounded-lg">
      </div>
      
    </div>

    <img src="../assets/img/WeDoTech.png" alt="test">

    <!-- What i use to code -->
    <div>

    </div>


  </section>

</template>