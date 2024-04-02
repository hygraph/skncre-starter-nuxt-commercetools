<script lang="ts" setup>
defineProps(["index", "text"]);
</script>

<template>
  <li class="grid mb-12 items-center" style="grid-template-columns: 1fr 5fr">
    <span class="text-6xl font-bold font-title text-primary"
      >{{ index + 1 }}.</span
    ><span class="text-md">{{ text }}</span>
  </li>
</template>
