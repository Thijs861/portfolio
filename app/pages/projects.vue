<script setup>
const username = 'Thijs861'

// Nuxt provides a useFetch() function to easily fetch data from Github
const { data: repos, pending, error } = await useFetch(
  `https://api.github.com/users/${username}/repos`
)
</script>

<template>
  <section class="py-20">
    <h2 class="text-3xl text-gray-300 pb-1 bungee">Projects</h2>
    <p class="text-gray-400 roboto mb-2">A few of my idea's created to learn.</p>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-500">Error loading repos.</div>

    <ul v-else class="space-y-4 mt-10">
      <li v-for="repo in repos" :key="repo.id" class="p-4 bg-[#2a2a2a] border border-[#333] rounded-lg shadow-md">
        <a :href="repo.html_url" target="_blank" class="text-lg font-semibold text-blue-400 hover:underline">
          {{ repo.name }}
        </a>
        <p class="text-gray-400 text-sm">{{ repo.description || 'No description' }}</p>
      </li>
    </ul>
  </section>
</template>