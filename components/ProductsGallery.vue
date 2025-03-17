<template>
  <div class="products-gallery" :class="{ 'mobile': isMobile }">
    <div class="select-container">
      <CategorySelect
        :categories="categories"
        v-model="selectedCategoryId"
        @update:modelValue="filterProducts"
      />
    </div>

    <div class="products-grid">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-item"
      >
        <ProductCard
          :image="product.image"
          :views="product.views"
          :date="product.date"
          :price="product.price"
          :title="product.title"
          :isPromoted="product.isPromoted || false"
          :isHidden="product.isHidden || false"
        />
      </div>
    </div>

    <div v-if="filteredProducts.length === 0" class="no-products">
      <p>Нет товаров в выбранной категории</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useDevice } from "@/composables/useDevice"; // Добавлен импорт

const { isMobile } = useDevice(); // Получаем isMobile из composable

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
});

const selectedCategoryId = ref("all");
const filteredProducts = ref([...props.products]);

const filterProducts = () => {
  if (selectedCategoryId.value === "all") {
    filteredProducts.value = [...props.products];
  } else {
    filteredProducts.value = props.products.filter(
      (product) => product.categoryId === selectedCategoryId.value
    );
  }
};

watchEffect(() => {
  filterProducts();
});
</script>

<style scoped>
.products-gallery {
  margin: 0 auto;
  padding: 0 32px;
}

.products-gallery.mobile {
  padding: 0 8px;
}

.select-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.products-gallery.mobile .select-container {
  margin-bottom: 16px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.products-gallery.mobile .products-grid {
  gap: 8px;
}

.product-item {
  width: 100%;
}

.no-products {
  text-align: center;
  padding: 48px 0;
  color: #71717a;
  font-family: "Inter", sans-serif;
  font-size: 16px;
}

.products-gallery.mobile .no-products {
  padding: 32px 0;
}

@media (max-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
