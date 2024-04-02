<script setup>
defineProps(["title", "description", "image"]);
</script>
<template>
  <section class="md:aspect-[1440/632] relative">
    <NuxtImg
      provider="hygraph"
      :src="image.url"
      class="md:absolute"
      width="2880"
      height="1264"
      :quality="90"
      sizes="sm:100vw"
      :alt="title"
    />

    <div
      class="p-8 md:p-0 md:absolute md:max-w-md lg:max-w-xl md:top-28 md:left-12 lg:top-44 lg:left-56"
    >
      <h1
        class="font-title font-bold text-4xl sm:text-6xl mb-8 xl:text-7xl 2xl:text-8xl"
      >
        {{ title.split("your")[0] }} <span class="text-primary">your</span>
        {{ title.split("your")[1] }}
      </h1>
      <p v-if="description" class="text-xl">
        {{ description }}
      </p>
    </div>
  </section>
</template>
