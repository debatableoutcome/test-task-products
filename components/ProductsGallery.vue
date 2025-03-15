<template>
  <div class="products-gallery">
    <h2 class="text-h5 mb-4">Товары и услуги</h2>
    <p>Здесь будет галерея товаров</p>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.products-gallery {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
