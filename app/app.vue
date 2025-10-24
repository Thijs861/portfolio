  <script setup>
    // Body styling
    useHead({ 
      bodyAttrs: {
        class: 'bg-[#1e1e1e]'
      },
    });

    // useSeoMeta({
    // title: 'Thijs.dev',
    // ogTitle: 'Thijs.dev',
    // description: '',
    // ogDescription: '',
    // ogImage: '',
    // twitterCard: '',
    // });
    
  </script>

<template>
  <main class="max-w-5xl mx-auto px-4 py-12">
    <header class="flex justify-center items-center py-4 bg-[#1e1e1e]">
      <nav class="flex items-center gap-8 bg-[#2a2a2a] border border-[#333] rounded-full px-10 py-3 text-gray-300 shadow-lg backdrop-blur-sm roboto-mono">
        <a href="/" class="hover:text-white transition-colors duration-200 ">Home</a>
        <a href="/projects" class="hover:text-white transition-colors duration-200">Projects</a>
        <a href="#" class="hover:text-white transition-colors duration-200 line-through">About</a>
        <a href="/skills" class="hover:text-white transition-colors duration-200">Skills</a>
      </nav>
    </header>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

  <!-- <footer class="text-center">
    <p>&copy; 2025</p>
  </footer> -->
  </main>
</template>