<template>
  <div class="category-selector">
    <v-menu
      v-model="menuOpen"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          variant="outlined"
          color="#E4E4E7"
          class="selector-btn"
          v-bind="props"
        >
          {{ selectedCategory ? selectedCategory.name : "Все товары и услуги" }}
          <v-icon end>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card class="category-menu pa-4" min-width="320">
        <div class="d-flex justify-space-between align-center mb-4">
          <div class="text-h6">Товары и услуги</div>
          <v-btn icon @click="menuOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-list>
          <v-list-item
            v-for="category in categories"
            :key="category.id"
            :active="selectedCategoryId === category.id"
            @click="selectCategory(category)"
            class="category-item"
          >
            <v-list-item-title>
              {{ category.name }}
              <span v-if="category.count" class="category-count">{{
                category.count
              }}</span>
            </v-list-item-title>
            <template v-slot:append>
              <v-icon v-if="selectedCategoryId === category.id" color="#337566">
                mdi-check
              </v-icon>
            </template>
          </v-list-item>
        </v-list>

        <v-btn
          color="#337566"
          variant="flat"
          block
          class="apply-btn mt-4"
          @click="applyFilter"
        >
          Применить
        </v-btn>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  categories: {
    type: Array,
    default: () => [
      { id: "all", name: "Все товары и услуги", count: null },
      { id: "category1", name: "Категория 1", count: null },
      { id: "graves", name: "Гробы", count: 5 },
      { id: "urns", name: "Урны", count: 12 },
      { id: "category2", name: "Категория 2", count: null },
      { id: "coffins", name: "Тапки", count: 2 },
      { id: "covers", name: "Покрывало", count: 1 },
    ],
  },
  initialCategoryId: {
    type: String,
    default: "all",
  },
});

const emit = defineEmits(["update:category"]);

const menuOpen = ref(false);
const selectedCategoryId = ref(props.initialCategoryId);
const selectedCategory = ref(
  props.categories.find((cat) => cat.id === props.initialCategoryId)
);

const selectCategory = (category) => {
  selectedCategoryId.value = category.id;
  selectedCategory.value = category;
};

const applyFilter = () => {
  emit("update:category", selectedCategoryId.value);
  menuOpen.value = false;
};
</script>

<style scoped>
.category-selector {
  margin-bottom: 20px;
}

.selector-btn {
  font-family: "Inter", sans-serif;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
  border-radius: 8px;
  width: 260px;
  justify-content: space-between;
}

.category-menu {
  border-radius: 12px;
}

.category-item {
  border-radius: 8px;
  margin-bottom: 2px;
}

.category-count {
  background-color: #f3f4f6;
  color: #71717a;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 8px;
}

.apply-btn {
  text-transform: none;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  border-radius: 8px;
  color: white;
}
</style>
