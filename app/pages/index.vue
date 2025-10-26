<script setup>
  import TxtRotate from '../components/TxtRotate.vue'
</script>

<template>
  <section class="hero flex items-center justify-center mt-[200px]">
    <div class="text-center">
      <!-- <h2 class="text-3xl md:text-[10rem] font-bold mb-4 text-gray-200 bungee">
        Thijs.dev
      </h2> -->

      <h1 class="text-3xl md:text-[10rem] font-bold mb-4 text-gray-200 bungee">
        <TxtRotate :phrases='["Thijs.dev", "UI/UX Designer"]' :period="1500" />
      </h1>

      <p class="text-2xl font-bold text-gray-300 roboto">Build whatever comes to mind ✨</p>
      <div class="flex space-x-2 justify-center mt-10">
        <a href="https://github.com/Thijs861">
          <img class="w-10 h-auto" src="/icons/git-ico/Github.png" target="_blank" alt="Github icon">
        </a>
        <a href="https://www.figma.com/@Thijsvw">
          <img class="w-10 h-auto" src="/icons/fig-ico/Figma.png" alt="Figma icon">
        </a>
      </div>
    </div>
  </section>
</template>