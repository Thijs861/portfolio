<script setup>
  const { data } = await useFetch('/api/fetch-img')
</script>

<template>
    <section class="mb-10">
      <div class="space-y-5">
        <p class="font-bold text-2xl test2 text-gray-200">Projects</p>
        <div class="grid gap-6 grid-cols-1 md:grid-cols-3">
          <div
            v-for="file in data?.files"
            :key="file"
            class="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <img :src="`../assets/img/thumbnails/${file}`" :alt="file" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
    </section>
</template>