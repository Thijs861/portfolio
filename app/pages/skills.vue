<script setup>

// Skills data template.
// Git, Vue, Tailwind
const skills = [
 {
  name: 'Nuxt',
  sub: 'Framework',
  icon: '',
  alt: 'Nuxt icon'
 },
 {
  name: 'Node',
  sub: 'Framework',
  icon: '/icons/frameworks/node-ico.png',
  alt: 'Node icon'
 },
 {
  name: 'Git', 
  sub: 'Tool',
  icon: '/icons/frameworks/git-ico.png',
  alt: 'Git icon'
 },
 {
  name: 'TailwindCSS',
  sub: 'Styling',
  icon: '',
  alt: 'Tailwind icon'
 },
 {
  name: 'Python',
  sub: 'Internal scripts',
  icon: '/icons/frameworks/python-ico.png',
  alt: 'Python icon'
 },
 {
  name: 'Vue',
  sub: 'Framework',
  icon: '',
  alt: 'Vue icon'
 }
]
</script>

<template>
  <section class="max-w-5xl mx-auto py-10 px-4 text-gray-300">
    <h2 class="text-3xl font-bold text-white mb-1">Skills</h2>
    <p class="text-gray-400">
      Some of my favorite technologies to use for projects!
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3  gap-6 mt-10">
      <div v-for="(skill, index) in skills" :key="index" class="flex items-center px-6 py-4 rounded-xl space-x-2 bg-[#2a2a2a] border border-[#333] shadow-md">
        <img class="w-10" :src="skill.icon" :alt="skill.alt">
        <div>
          <p class="font-medium text-lg">{{ skill.name }}</p>
          <p class="font-medium text-gray-400 text-sm">{{ skill.sub }}</p>
        </div>
      </div>
    </div>
  </section>
</template>