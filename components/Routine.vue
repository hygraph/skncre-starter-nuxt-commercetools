<script setup>
defineProps(["chapeau", "title", "description", "image", "cta", "url"]);
</script>

<template>
  <section class="py-16 relative bg-light">
    <NuxtImg
      :src="image.url"
      :alt="title"
      width="768"
      height="510"
      provider="hygraph"
      class="lg:w-2/4"
      :quality="90"
      sizes="sm:100vw"
    />
    <div
      class="w-full bg-tertiary p-8 lg:max-w-2xl lg:absolute top-32 right-32"
    >
      <h2 class="mb-8 font-title">
        <span
          v-if="chapeau"
          class="block text-primary font-bold text-4xl lg:text-6xl"
          >{{ chapeau }}</span
        ><span
          v-if="title"
          class="block text-dark font-bold text-4xl lg:text-6xl ml-8 -mt-2"
          >{{ title }}</span
        >
      </h2>
      <p v-if="description" class="text-xl ml-8 mb-8">
        {{ description }}
      </p>
      <a v-if="url" :href="url" class="inline-block cta ml-8">{{ cta }}</a>
    </div>
  </section>
</template>
