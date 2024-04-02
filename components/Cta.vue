<script setup>
defineProps(["chapeau", "title", "description", "url", "cta"]);
</script>
<template>
  <div class="w-full mb-12 bg-tertiary p-8">
    <h3 class="mb-8">
      <span
        v-if="chapeau"
        class="block text-primary font-bold font-title text-4xl md:text-6xl"
        >{{ chapeau }}</span
      ><span
        v-if="title"
        class="block text-dark font-bold font-title text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2"
        >{{ title }}</span
      >
    </h3>
    <p v-if="description" class="text-xl sm:ml-8 mb-8">
      {{ description }}
    </p>
    <a v-if="url" class="inline-block cta ml-8" :href="url">{{ cta }}</a>
  </div>
</template>
