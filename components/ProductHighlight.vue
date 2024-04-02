<script setup lang="ts">
defineProps(["productFocus"]);
const variant = ref("imageLeft");
const theme = ref("dark");
</script>

<template>
  <section class="md:aspect-[1440/722] relative">
    <NuxtImg
      provider="hygraph"
      :src="productFocus.image.url"
      class="md:absolute md:object-cover"
      width="2880"
      height="1446"
      :quality="90"
      sizes="sm:50vw"
      :alt="productFocus.title"
    />
    <div
      class="p-8 md:p-0 md:max-w-md lg:max-w-2xl md:absolute md:top-24 lg:top-56"
      :class="
        variant === 'imageLeft'
          ? 'md:right-16 lg:right-44'
          : 'md:left-16 lg:left-44'
      "
    >
      <h2 class="mb-8">
        <span
          class="block text-primary font-bold font-title text-4xl md:text-6xl"
          >your</span
        ><span
          class="font-bold font-title text-3xl sm:text-4xl md:text-6xl sm:ml-8 sm:-mt-2 block"
          :class="theme === 'light' ? 'text-light' : 'text-dark'"
        >
          {{ productFocus.title }}</span
        >
      </h2>

      <p
        v-if="productFocus.description"
        class="text-xl ml-8 mb-8"
        v-html="productFocus.description"
        :class="theme === 'light' ? 'text-light' : 'text-dark'"
      />
      <a
        v-if="productFocus.url"
        class="inline-block cta ml-8"
        :href="productFocus.url"
        >{{ productFocus.cta }}</a
      >
    </div>
  </section>
</template>
