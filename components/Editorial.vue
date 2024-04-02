<script setup lang="ts">
import { getComponentForName } from "./componentMapper";

defineProps(["image", "components"]);
</script>
<template>
  <section
    className="flex flex-col lg:flex-row bg-light justify-between p-8 lg:p-12"
  >
    <div className="flex flex-col items-stretch w-full lg:w-2/4">
      <component
        v-for="component in components"
        :is="getComponentForName(component?.__typename)"
        :key="(component?.id as string)"
        v-bind="component"
      />
    </div>
    <NuxtImg
      :src="image.url"
      alt="Editorial image"
      width="1000"
      height="1504"
      provider="hygraph"
      class="w-full lg:w-2/4 mt-8 lg:mt-0 lg:ml-12 object-cover"
      :quality="90"
      sizes="sm:50vw"
    />
  </section>
</template>
