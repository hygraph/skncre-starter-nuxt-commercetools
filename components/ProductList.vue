<script setup>
const props = defineProps(["title", "relatedProductList"]);
const products = computed(() => {
  return props.relatedProductList?.relatedProducts?.products.map((product) => {
    return {
      id: product.id,
      image: product.images[0].url,
      title: product.name,
      slug: product.slug,
    };
  });
});
</script>

<template>
  <section class="bg-tertiary" v-if="products">
    <pre>{{ title }}</pre>
    <h3
      v-if="title"
      class="text-5xl pt-12 mb-12 font-bold font-title text-center"
    >
      {{ title }}
    </h3>
    <div class="grid gap-6 mx-12 pb-32 md:grid-cols-2 lg:gap-12">
      <Card
        v-for="product in products"
        :key="product.id"
        :image="product.image"
        :title="product.title"
        :url="`/pdp/${product.slug}`"
        cta="BUY NOW"
      />
    </div>
  </section>
</template>
