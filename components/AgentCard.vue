<template>
  <div class="agent-card">
    <div class="agent-photo-container">
      <img :src="photo" :alt="name" class="agent-photo" />
    </div>
    <div class="agent-info">
      <div class="agent-header">
        <h3 class="agent-name">{{ name }}</h3>
        <div class="agent-rating">
          <div class="rating-container">
            <img src="/icons/star.svg" alt="Rating" class="rating-icon" />
            <span class="rating-value">{{ rating }}</span>
            <span class="reviews-count">({{ reviewsCount }} отзывов)</span>
          </div>
        </div>
      </div>
      <p class="agent-position">{{ position }}</p>
      <p class="agent-description">
        Помогу подобрать участок в организации, похороню его тело или прах если
        есть,
        <span class="agent-description-more"
          >подскажу, какие деньги вы потратите и т.п...</span
        >
      </p>
      <div class="agent-contact">
        <div class="agent-phone">{{ phone }}</div>
        <v-btn
          class="agent-message-btn"
          variant="outlined"
          color="#337566"
          size="small"
          rounded
        >
          Написать
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.7,
  },
  reviewsCount: {
    type: Number,
    default: 19,
  },
});
</script>

<style scoped>
.agent-card {
  display: flex;
  padding: 16px;
  background-color: #ffffff;
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

.agent-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.agent-name {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #18181b;
  margin: 0;
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
  font-size: 14px;
  font-weight: 500;
  color: #18181b;
  margin-right: 4px;
}

.reviews-count {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #71717a;
}

.agent-position {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #71717a;
  margin: 0 0 12px 0;
}

.agent-description {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #52525b;
  margin: 0 0 12px 0;
}

.agent-description-more {
  color: #71717a;
}

.agent-contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.agent-phone {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #18181b;
}

.agent-message-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
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

  .agent-header {
    flex-direction: column;
  }

  .agent-rating {
    margin-top: 8px;
  }
}
</style>
