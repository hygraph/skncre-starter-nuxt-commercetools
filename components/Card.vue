<script setup>
defineProps(["image", "title", "url", "cta"]);
</script>
<template>
  <div class="bg-tertiary aspect-[1/1] relative">
    <a class="block absolute w-full h-full top-0 left-0" :href="url">
      <NuxtImg
        v-if="image && image.url"
        :src="image.url"
        :alt="image.alt || title"
        width="500"
        height="500"
        provider="hygraph"
        class="absolute w-100 h-auto"
        loading="lazy"
        :quality="90"
        sizes="sm:100vw md:30vw"
      />

      <img
        v-else
        :src="image"
        :alt="title"
        class="absolute w-100 h-auto"
        loading="lazy"
        width="500"
        height="500"
      />

      <button class="cta absolute bottom-4 right-4" v-if="cta">
        {{ cta }}
      </button>
      <div class="absolute top-6 md:top-auto md:-bottom-6 left-8">
        <h3>
          <span
            class="block text-primary font-bold font-title text-4xl md:text-5xl"
            >your</span
          ><span
            class="block text-dark font-bold font-title text-3xl sm:text-4xl md:text-5xl sm:ml-8 sm:-mt-2"
            >{{ title }}</span
          >
        </h3>
      </div></a
    >
  </div>
</template>
