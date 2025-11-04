<script setup>

// Skills data template.
const skills = [
 {
  name: 'Nuxt',
  sub: 'Full stack framework for Vue.',
  icon: '/icons/frameworks/nuxt-ico.png',
  alt: 'Nuxt icon'
 },
 {
  name: 'Node',
  sub: 'Server side scripting',
  icon: '/icons/frameworks/node-ico.png',
  alt: 'Node icon'
 },
 {
  name: 'Git', 
  sub: 'Version control',
  icon: '/icons/frameworks/git-ico.png',
  alt: 'Git icon'
 },
 {
  name: 'TailwindCSS',
  sub: 'Utility-first styling',
  icon: '/icons/frameworks/tailwind-ico.png',
  alt: 'Tailwind icon'
 },
 {
  name: 'Python',
  sub: 'General-purpose programming',
  icon: '/icons/frameworks/python-ico.png',
  alt: 'Python icon'
 },
 {
  name: 'Vue',
  sub: 'UI component framework',
  icon: '/icons/frameworks/vue-ico.png',
  alt: 'Vue icon'
 },
 {
  name: 'Vite',
  sub: 'Build tool for front-end projects',
  icon: '/icons/frameworks/vite-ico.png',
  alt: 'Vite icon'
 },
 {
  name: 'Laravel',
  sub: 'Building large scale applications & APIs',
  icon: '/icons/frameworks/laravel-ico.png',
  alt: 'Laravel icon'
 }
]
</script>

<template>
  <section class="py-20 text-gray-300">
    <h2 class="text-3xl pb-1 bungee">Skills</h2>
    <p class="text-gray-400 roboto">
      Some of my favorite technologies to use for projects!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div v-for="(skill, index) in skills" :key="index" class="flex items-center px-6 py-4 rounded-xl space-x-3 bg-[#2a2a2a] border border-[#333] shadow-md">
        <img class="w-10" :src="skill.icon" :alt="skill.alt">
        <div>
          <p class="font-medium text-lg">{{ skill.name }}</p>
          <p class="font-medium text-gray-400 text-sm">{{ skill.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>