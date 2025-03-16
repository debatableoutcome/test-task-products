<template>
  <div class="agent-card">
    <div class="agent-photo-container">
      <img :src="photo" :alt="name" class="agent-photo" />
    </div>
    <div class="agent-info">
      <h3 class="agent-name">{{ name }}</h3>

      <div class="agent-details">
        <div v-if="verified" class="agent-verified">
          <img src="/icons/verified.svg" alt="Verified" class="verified-icon" />
          <span class="verified-text">Документы проверены</span>
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
  </div>
</template>

<script setup lang="ts">
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
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/line-clamp.scss";

.agent-card {
  display: flex;
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #e4e4e7;
  border-radius: 12px;
}

.agent-photo-container {
  width: 140px;
  height: 140px;
  flex-shrink: 0;
  margin-right: 16px;
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
  margin: 0 0 8px 0;
  font-variant-numeric: lining-nums proportional-nums;
}

.agent-details {
  display: flex;
  flex-direction: row;
  align-items: center;
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

.verified-text {
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

@media (max-width: 600px) {
  .agent-card {
    flex-direction: column;
  }

  .agent-photo-container {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    margin-right: 0;
    margin-bottom: 16px;
  }

  .agent-details {
    flex-wrap: wrap;
  }
}
</style>
