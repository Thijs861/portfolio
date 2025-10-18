<script setup>
  const { data } = await useFetch('/api/fetch-img')

  // Body styling
  useHead({
    bodyAttrs: {
      class: 'bg-[#FFF8E7]'
    }
  })
</script>


<template>
  <section class="max-w-5xl mx-auto px-4 py-12">
    <div class="text-center mt-30 mb-50">
      <nav>
        <ul>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        </ul>
      </nav>


      <h2 class="text-3xl md:text-[10rem] font-bold mb-4 text-gray-800">
        Thijs.dev
      </h2>

      <div class="flex space-x-2 justify-center">
        <a href="https://github.com/Thijs861">
          <img class="w-10 h-auto" src="./icons/git-ico/github-mark.png" alt="Github icon">
        </a>
        <a href="https://www.figma.com/@Thijsvw">
          <img class="w-10 h-auto" src="./icons/fig-ico/icons8-figma-100.png" alt="Figma icon">
        </a>
      </div>
    </div>

    <!-- Grid Section -->
    <div class="text-center space-y-5">
      <p class="font-bold text-2xl">Check out some of my projects</p>
      <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div
          v-for="file in data?.files"
          :key="file"
          class="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <img :src="`../assets/img/${file}`" :alt="file" class="w-full h-auto rounded-lg">
        </div>
      </div>
    </div>

    <!-- What i use to code -->
    <div>

    </div>


  </section>

</template>