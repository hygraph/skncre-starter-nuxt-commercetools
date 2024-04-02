<script setup>
const route = useRoute();
const { id } = route.params;
const { data: cart } = await useFetch("/api/cart", { query: { cart_id: id } });
</script>

<template>
  <template>
    <RenderPage :data="product">
      <div class="bg-secondary p-8 flex-1 w-full">
        <h1>
          <span class="block text-primary font-bold font-title text-6xl"
            >your</span
          ><span
            class="block text-dark font-bold font-title text-6xl ml-8 -mt-2"
            >shopping cart</span
          >
        </h1>
      </div>

      <section class="bg-tertiary p-12" v-if="cart">
        <div
          class="flex gap-12"
          v-for="product in cart.lineItems"
          :key="product.id"
        >
          <Card
            class="w-96"
            :image="product.variant.images[0].url"
            :title="product.name['en-GB']"
          />
          <div class="max-w-96">
            <h2
              class="block text-primary font-bold font-title text-3xl sm:text-4xl md:text-5xl mb-6"
            >
              {{ product.name["en-GB"] }}
            </h2>
            <p class="mb-4">{{ product.variant.attributes[0].value }}</p>
            <p class="font-bold text-xl mb-4">
              &euro; {{ (product.price.value.centAmount / 100).toFixed(2) }}
            </p>
          </div>
        </div>
      </section>

      <div class="bg-light p-8 flex-1 w-full">Total price: &euro;</div>
    </RenderPage>
  </template>
</template>
