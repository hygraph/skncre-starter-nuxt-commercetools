<script setup>
import { getComponentForName } from "./componentMapper";
defineProps(["image", "title", "items"]);
</script>

<template>
  <section class="relative">
    <NuxtImg
      provider="hygraph"
      :src="image.url"
      class="absolute h-full w-full object-cover"
      width="2880"
      height="1956"
      :quality="90"
      sizes="sm:100vw"
      :alt="title"
    />

    <div class="max-w-2xl px-12 py-24 md:px-24 md:py-36 relative">
      <h1 class="text-6xl font-bold mb-12 text-primary">{{ title }}</h1>

      <ul>
        <component
          v-for="(component, index) in items"
          :is="getComponentForName(component?.__typename)"
          :key="component?.id"
          v-bind="component"
          :index="index"
        />
      </ul>
    </div>
  </section>
</template>
