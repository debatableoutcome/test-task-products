<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="image" :alt="title" class="product-image" />
      <div class="product-stats">
        <div class="views-stat">
          <v-icon size="small" color="white">mdi-eye</v-icon>
          <span>{{ views }}</span>
        </div>
        <div class="date-stat">
          <v-icon size="small" color="white">mdi-calendar</v-icon>
          <span>{{ date }}</span>
        </div>
      </div>
    </div>

    <div class="product-info">
      <div class="product-price">{{ formatPrice(price) }}</div>
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
    </div>

    <div class="product-footer">
      <div v-if="isSold" class="product-status">
        Объявление {{ isHidden ? "скрыто" : "продается" }}
      </div>
      <v-btn
        v-else
        variant="outlined"
        color="#337566"
        block
        class="view-btn"
        :disabled="isHidden"
      >
        Просмотреть
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
});

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/line-clamp.scss";

.product-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-image-container {
  position: relative;
  width: 100%;
  padding-top: 75%;
  background-color: #f5f5f5;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-stats {
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  gap: 8px;
}

.views-stat,
.date-stat {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 2px 6px;

  span {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    color: white;
    margin-left: 4px;
  }
}

.product-info {
  padding: 12px 16px;
  flex-grow: 1;
}

.product-price {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: #18181b;
  margin-bottom: 4px;
}

.product-title {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #18181b;
  margin: 0 0 4px 0;
  @include line-clamp(2);
}

.product-description {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #71717a;
  margin: 0;
  @include line-clamp(2);
}

.product-footer {
  padding: 0 16px 16px;
}

.product-status {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #71717a;
  text-align: center;
}

.view-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
}
</style>
