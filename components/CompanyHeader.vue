<template>
  <div class="company-header">
    <div v-if="!$device.isMobile" class="header-info">
      <h1 class="company-title">{{ companyName }}</h1>

      <div class="company-verification">
        <div class="verification-badge">
          <v-icon color="green" size="small" class="mr-1">
            mdi-check-circle
          </v-icon>
          <span class="verification-text">Документы проверены</span>
        </div>

        <div class="rating-container">
          <span class="separator">•</span>
          <v-icon color="amber" size="small" class="mr-1"> mdi-star </v-icon>
          <span>{{ rating }}</span>
          <span class="reviews-count">{{ reviewsCount }} отзывов</span>
        </div>
      </div>

      <v-btn
        color="#337566"
        variant="outlined"
        class="contact-btn"
        @click="showDevDialog"
      >
        Показать номер телефона
      </v-btn>
    </div>

    <div class="tabs-section" :class="{ 'mobile': $device.isMobile }">
      <div class="tabs-container" :class="{ 'scrollable': $device.isMobile }">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-item"
          :class="{ 'active': activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          {{ tab.title }}
          <span v-if="tab.count" class="tab-count">{{ tab.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  companyName: {
    type: String,
    default: "Наследие",
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

const { showDevDialog } = useDevDialog();

const tabs = ref([
  { id: "products", title: "Товары и услуги", count: 29 },
  { id: "agents", title: "Агенты", count: 5 },
  { id: "about", title: "О компании" },
]);

const activeTab = ref("products");

function setActiveTab(tabId: string) {
  activeTab.value = tabId;
}
</script>

<style scoped>
.company-header {
  width: 100%;
  background-color: #ffffff;
}

.header-info {
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
}

.company-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.company-verification {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.verification-badge {
  display: flex;
  align-items: center;
}

.verification-text {
  font-size: 14px;
  color: #333;
}

.separator {
  margin: 0 8px;
  color: #888;
}

.rating-container {
  display: flex;
  align-items: center;
  gap: 4px;
}

.reviews-count {
  color: #666;
  margin-left: 4px;
}

.contact-btn {
  align-self: flex-start;
  margin-top: 16px;
  height: 48px;
  font-weight: 500;
}

.tabs-section {
  border-bottom: 1px solid #eee;
  padding: 0 64px;
}

.tabs-section.mobile {
  padding: 0;
  border-bottom: none;
}

.tabs-container {
  display: flex;
  gap: 16px;
}

.tabs-container.scrollable {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE и Edge */
  -webkit-overflow-scrolling: touch;
  padding: 12px 16px;
  gap: 8px;
  margin: 0;
  background-color: white;
}

.tabs-container.scrollable::-webkit-scrollbar {
  display: none;
}

.tab-item {
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tabs-container.scrollable .tab-item {
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  flex-shrink: 0;
  display: inline-block;
}

.tab-item.active {
  background-color: #000000;
  color: #ffffff;
}

.tab-count {
  margin-left: 4px;
}
</style>
