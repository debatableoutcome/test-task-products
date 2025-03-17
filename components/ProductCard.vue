<template>
  <div class="product-card" :class="{ 'mobile': $device.isMobile }">
    <div class="product-image-container">
      <img :src="image" :alt="title" class="product-image" />

      <!-- Метка действия (только на мобильных устройствах) -->
      <div
        v-if="$device.isMobile"
        class="action-label"
        @click.stop="showDevDialog"
      >
        Действие
      </div>

      <div class="product-stats">
        <div class="stats-info">
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
    </div>

    <div class="product-info">
      <div class="product-price">{{ formatPrice(price) }}</div>
      <h3 class="product-title">{{ title }}</h3>
    </div>

    <div class="product-footer" :class="{ 'mobile-footer': $device.isMobile }">
      <div v-if="hidden" class="hidden-tag">Объявление скрыто</div>
      <div v-else-if="isPromoted" class="promoted-tag">
        Объявление продвигается
      </div>
      <div v-else class="promotion-container">
        <div
          class="promotion-text"
          :class="{ 'mobile-text': $device.isMobile }"
        >
          Увеличьте количество просмотров
        </div>
        <v-btn
          color="#337566"
          variant="flat"
          class="promote-btn"
          @click="showDevDialog"
        >
          Продвигать
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDevDialog } from "~/composables/useDevDialog";

const { showDevDialog } = useDevDialog();

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
  isPromoted: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Boolean,
    default: false,
  },
});

const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
};
</script>

<style lang="scss" scoped>
.product-card {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;

  // Мобильная версия
  &.mobile {
    border-radius: 0;
    border-bottom: 1px solid #e5e5e5;
  }
}

.product-image-container {
  position: relative;
  width: 100%;
  padding-top: 75%;
  background-color: #f5f5f5;
  border-radius: 20px;
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Стили для метки действия */
.action-label {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: white;
  color: #333;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 2;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-stats {
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  width: calc(100% - 16px);
  justify-content: space-between;
}

.stats-info {
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
  border-bottom: 1px solid #e5e5e5;
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
  font-weight: 600;
  color: #18181b;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-footer {
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.mobile-footer {
    padding: 12px 0;
  }
}

.promotion-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.promotion-text {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: #71717a;
  max-width: 80%;

  &.mobile-text {
    max-width: 60%;
    line-height: 1.3;
  }
}

.promoted-tag {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #337566;
  width: 100%;
  text-align: center;
}

.hidden-tag {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #d9534f;
  width: 100%;
  text-align: center;
}

.promote-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
  height: 32px;
  font-size: 14px;
}
</style>
