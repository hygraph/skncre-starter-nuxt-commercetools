<script setup lang="ts">
defineProps(["data"]);
</script>

<template>
  <main class="max-w-screen-2xl mx-auto">
    <GlobalHeader />
    <slot />
    <ComponentList :data="data" />
    <globalFooter />
  </main>
</template>
