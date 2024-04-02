<script setup lang="ts">
import { getComponentForName } from "./componentMapper";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const page = ref();

page.value = props.data;
</script>

<template>
  <section class="mb-12" v-if="page?.components">
    <component
      v-for="component in page?.components"
      :is="getComponentForName(component?.__typename)"
      :key="(component?.id as string)"
      v-bind="component"
    />
  </section>
</template>
