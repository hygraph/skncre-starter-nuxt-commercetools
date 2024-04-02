<script setup>
const props = defineProps(["product"]);

const mappedProduct = computed(() => {
  return props.product.masterData.current;
});

const images = computed(() => {
  return props.product.masterData.current.allVariants[0].images;
});

const price = computed(() => {
  return (
    props.product.masterData.current.allVariants[0].price.value.centAmount / 100
  );
});

const ingredients = computed(() => {
  return props.product.masterData.current.allVariants[0].attributesRaw[0].value;
});

const productId = props.product.id;
const adding = ref(false);

async function addtocart() {
  adding.value = true;
  const { data: cart } = await useFetch("/api/create-cart");
  const { data: updatedCart } = useFetch("/api/add-to-cart", {
    query: { cart_id: cart.value.id, product_id: productId },
  });

  adding.value = false;

  await navigateTo(`/cart/${cart.value.id}`);
}
</script>
<template>
  <section class="bg-light product-detail pb-12">
    <div class="grid grid-cols-2">
      <img
        v-for="image in images"
        :src="`${image.url}`"
        :alt="mappedProduct.name"
        class="aspect-[1/1] object-cover"
      />
    </div>
    <div class="flex flex-col md:flex-row mx-4 lg:mx-16 mb-12">
      <div class="bg-secondary p-8 md:-mt-12 flex-1 w-full md:w-2/4">
        <h1>
          <span class="block text-primary font-bold font-title text-6xl"
            >your</span
          ><span
            class="block text-dark font-bold font-title text-6xl ml-8 -mt-2"
            >{{ mappedProduct.name }}</span
          >
        </h1>
      </div>
      <div class="bg-tertiary p-8 md:-mt-12 w-full md:w-2/4">
        <p class="text-5xl font-bold font-title mb-4">${{ price }}</p>
        <button href="#" class="cta" @click="addtocart">
          <template v-if="adding">Addign to cart</template
          ><template v-else>add to cart</template>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8 md:mx-16">
      <div class="pr-2">
        <h2 class="text-3xl font-bold font-title mb-4">product description</h2>
        <article v-html="mappedProduct.description" />
      </div>
      <div class="pl-2">
        <h3 class="text-3xl font-bold font-title mb-4">ingredients</h3>
        <article v-html="ingredients" />
      </div>
    </div>
  </section>
</template>
