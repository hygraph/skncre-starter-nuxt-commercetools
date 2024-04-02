<script setup lang="ts">
defineProps(["__typename"]);
</script>

<template>
  <div
    class="bg-red-200 text-red-800 p-4 mb-4 border-4 border-red-400 max-w-3xl overflow-auto"
  >
    <p class="mb-4">
      No Component Vue file or wrong name in CMS for
      <strong>{{ __typename }}</strong>
    </p>
    <pre>{{ $attrs }}</pre>
  </div>
</template>
