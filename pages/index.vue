<script setup lang="ts">
const page = await usePage({ slug: "home", type: "page" });
useOgtags(page);
</script>

<template>
  <RenderPage :data="page" />
</template>
