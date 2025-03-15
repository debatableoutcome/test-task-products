<template>
  <v-card class="product-card" :to="productLink">
    <div class="image-container">
      <v-img
        :src="product.image"
        cover
        height="160"
        class="product-image"
      ></v-img>
      <div class="stats-overlay">
        <div class="views">
          <v-icon size="small" color="white">mdi-eye</v-icon>
          <span>{{ product.views }}</span>
        </div>
        <div class="date">
          <v-icon size="small" color="white">mdi-calendar</v-icon>
          <span>{{ product.date }}</span>
        </div>
      </div>
    </div>
    <v-card-text class="pa-3">
      <div class="price mb-1">{{ formatPrice(product.price) }} ₽</div>
      <div class="title mb-2">{{ product.title }}</div>
      <div class="description text-caption text-truncate">
        {{ product.description }}
      </div>
    </v-card-text>
    <v-card-actions class="px-3 pb-3 pt-0">
      <v-btn
        color="#337566"
        variant="flat"
        rounded="lg"
        block
        class="promote-btn"
      >
        {{ promoteBtnText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      image: "",
      views: 0,
      date: "",
      price: 0,
      title: "",
      description: "",
    }),
  },
  promoteBtnText: {
    type: String,
    default: "Продвигать",
  },
});

const productLink = computed(() => `/product/${props.product.id}`);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};
</script>

<style scoped>
.product-card {
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
}

.stats-overlay {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
}

.views,
.date {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 8px;
  padding: 2px 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.views span,
.date span {
  margin-left: 4px;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #18181b;
}

.title {
  font-size: 15px;
  font-weight: 500;
  color: #27272a;
  line-height: 1.3;
}

.description {
  color: #71717a;
}

.promote-btn {
  text-transform: none;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  color: white;
}
</style>
