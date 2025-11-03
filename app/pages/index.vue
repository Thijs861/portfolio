<script setup>
  import TxtRotate from '../components/TxtRotate.vue'
</script>

<template>
  <section class="flex items-center justify-center mt-[200px]">
    <div class="text-center">

      <h1 class="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold mb-4 text-gray-200 bungee leading-tight text-center">
        <TxtRotate :phrases='["ThijsVW.dev", "Programmer", "UI/UX Designer", "Problem solver"]' :period="1500" />
      </h1>
      <p class="text-base sm:text-lg md:text-2xl font-medium text-gray-300 roboto text-center max-w-xl mx-auto">Build whatever comes to mind ✨</p>

      <div class="flex justify-center gap-2 sm:gap-4 md:gap-6 mt-5 lg:mt-10">
        <a href="https://github.com/Thijs861" target="_blank" class="transition-transform duration-200 hover:scale-110">
          <img class="w-8 lg:w-10 h-auto" src="/icons/git-ico/Github.png" alt="GitHub icon"/>
        </a>

        <a href="https://www.figma.com/@Thijsvw" target="_blank" class="transition-transform duration-200 hover:scale-110">
          <img class="w-8 lg:w-10 h-auto" src="/icons/fig-ico/Figma.png" alt="Figma icon" />
        </a>
      </div>
    </div>
  </section>
</template>