<template>
  <div class="category-select">
    <div class="select-trigger" @click="isOpen = !isOpen">
      <span>{{
        selectedCategory ? selectedCategory.name : "Все товары и услуги"
      }}</span>
      <v-icon>{{ isOpen ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
    </div>

    <div v-if="isOpen" class="select-dropdown">
      <div class="select-dropdown-header">
        <h3 class="select-title">Товары и услуги</h3>
        <v-icon @click="isOpen = false">mdi-close</v-icon>
      </div>

      <div class="select-options">
        <div
          v-for="category in categories"
          :key="category.id"
          class="select-option"
          :class="{
            'select-option-active': category.id === selectedCategoryId,
          }"
          @click="selectCategory(category)"
        >
          <span class="option-name">{{ category.name }}</span>
          <span v-if="category.count" class="option-count">{{
            category.count
          }}</span>
          <v-icon v-if="category.id === selectedCategoryId" color="#337566"
            >mdi-check</v-icon
          >
        </div>
      </div>

      <div class="select-footer">
        <v-btn block color="#337566" @click="applySelection" class="apply-btn">
          Применить
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: "all",
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedCategoryId = ref(props.modelValue);

const selectedCategory = computed(() => {
  return props.categories.find((cat) => cat.id === selectedCategoryId.value);
});

const selectCategory = (category) => {
  selectedCategoryId.value = category.id;
};

const applySelection = () => {
  emit("update:modelValue", selectedCategoryId.value);
  isOpen.value = false;
};
</script>

<style scoped>
.category-select {
  position: relative;
  width: 100%;
  max-width: 560px;
  margin: 0 auto 16px;
}

.select-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin-top: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.select-dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f5f5f5;
}

.select-title {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

.select-options {
  max-height: 300px;
  overflow-y: auto;
}

.select-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
}

.select-option:last-child {
  border-bottom: none;
}

.select-option-active {
  background-color: rgba(51, 117, 102, 0.05);
}

.option-name {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.option-count {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #71717a;
  margin-left: 8px;
}

.select-footer {
  padding: 16px;
  border-top: 1px solid #f5f5f5;
}

.apply-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
}
</style>
