<template>
  <div class="agent-card" :class="{ 'mobile': isMobile }">
    <!-- Десктоп -->
    <template v-if="!isMobile">
      <div class="agent-photo-container">
        <img :src="photo" :alt="name" class="agent-photo" />
      </div>
      <div class="agent-info">
        <h3 class="agent-name">{{ name }}</h3>

        <div class="agent-details">
          <div v-if="verified" class="agent-verified">
            <img
              src="/icons/verified.svg"
              alt="Verified"
              class="verified-icon"
            />
            <span class="verification-text">Документы проверены</span>
          </div>

          <div class="agent-rating">
            <div class="rating-container">
              <img src="/icons/star.svg" alt="Rating" class="rating-icon" />
              <span class="rating-value">{{ rating }}</span>
            </div>
          </div>

          <div class="agent-reviews">
            <span class="reviews-count">{{ reviews }}</span>
          </div>
        </div>

        <p class="agent-description">
          {{ text }}
        </p>
      </div>
    </template>

    <!-- Моб-->
    <template v-else>
      <div class="mobile-header">
        <div class="mobile-photo">
          <img :src="photo" :alt="name" class="mobile-photo-img" />
        </div>
        <div class="mobile-main-info">
          <h3 class="mobile-name">{{ name }}</h3>
          <div class="mobile-details">
            <div v-if="verified" class="mobile-verified">
              <img
                src="/icons/verified.svg"
                alt="Verified"
                class="verified-icon-small"
              />
              <span class="verified-text-small">Проверен</span>
            </div>

            <div class="mobile-rating">
              <img
                src="/icons/star.svg"
                alt="Rating"
                class="rating-icon-small"
              />
              <span class="rating-value-small">{{ rating }}</span>
            </div>

            <div class="mobile-reviews">
              <span class="reviews-count-small">{{ reviews }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-description">
        <p class="mobile-text">{{ text }}</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useDevice } from "~/composables/useDevice";

defineProps({
  name: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: String,
    default: "4.7",
  },
  reviews: {
    type: String,
    default: "19 отзывов",
  },
  photo: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default:
      "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текста",
  },
});

const { isMobile } = useDevice();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/line-clamp.scss";

/* Общие стили */
.agent-card {
  display: flex;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 12px;
  height: auto;

  &.mobile {
    flex-direction: column;
    padding: 16px;
  }
}

/* Десктопные стили */
.agent-photo-container {
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  margin-right: 20px;
  border-radius: 8px;
  overflow: hidden;
}

.agent-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.agent-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.agent-name {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0%;
  color: #18181b;
  margin: 0 0 12px 0;
  font-variant-numeric: lining-nums proportional-nums;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.agent-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.agent-verified {
  display: flex;
  align-items: center;
}

.verified-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.verification-text {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #71717a;
}

.agent-rating {
  display: flex;
  align-items: center;
}

.rating-container {
  display: flex;
  align-items: center;
}

.rating-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.rating-value {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #18181b;
}

.agent-reviews {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #71717a;
}

.agent-description {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #52525b;
  margin: 0;
  @include line-clamp(3);
}

/* Мобильные стили */
.mobile-header {
  display: flex;
  height: auto;
  min-height: 48px;
  margin-bottom: 8px;
}

.mobile-photo {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;
}

.mobile-photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-main-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mobile-name {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #18181b;
  margin: 0 0 4px 0;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.mobile-details {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.mobile-verified,
.mobile-rating,
.mobile-reviews {
  display: flex;
  align-items: center;
}

.verified-icon-small,
.rating-icon-small {
  width: 14px;
  height: 14px;
  margin-right: 3px;
}

.verified-text-small,
.reviews-count-small {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #71717a;
}

.rating-value-small {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #18181b;
}

.mobile-description {
  padding-top: 0;
}

.mobile-text {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: #52525b;
  margin: 0;
  @include line-clamp(3);
}
</style>
