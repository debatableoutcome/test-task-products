<template>
  <div class="company-header">
    <div class="header-logo-container">
      <v-img :src="logo" width="120" height="120" class="header-logo"></v-img>
    </div>
    <h1 class="company-name">{{ companyName }}</h1>
    <div class="company-info">
      <div class="info-container d-flex align-center">
        <v-img
          src="/icons/verified.svg"
          alt="Verified"
          width="16"
          height="16"
          class="verified-icon mr-1"
        ></v-img>
        {{ verifiedText }}
        <span class="dot-divider"></span>
        <v-img
          src="/icons/star.svg"
          alt="Star"
          width="16"
          height="16"
          class="star-icon mr-1"
        ></v-img>
        {{ rating }}
        <span class="dot-divider"></span>
        {{ reviewsCount }} {{ reviewsText }}
      </div>
    </div>
    <div class="actions mt-5">
      <v-btn color="#337566" variant="flat" rounded="lg" class="contact-btn">
        {{ contactBtnText }}
      </v-btn>
    </div>
    <div class="navigation-tabs mt-6">
      <v-btn
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-btn', { 'active-tab': index === activeTab }]"
        variant="outlined"
        rounded="lg"
        @click="updateTab(index)"
      >
        {{ tab.label }}
        <span v-if="tab.count" class="tab-count ml-1">{{ tab.count }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  logo: {
    type: String,
    default: "/icons/header-logo.svg",
  },
  companyName: {
    type: String,
    default: "Наследие",
  },
  verifiedText: {
    type: String,
    default: "Документы проверены",
  },
  rating: {
    type: Number,
    default: 4.7,
  },
  reviewsCount: {
    type: Number,
    default: 19,
  },
  reviewsText: {
    type: String,
    default: "отзывов",
  },
  contactBtnText: {
    type: String,
    default: "Показать номер телефона",
  },
  tabs: {
    type: Array,
    default: () => [
      { label: "Товары и услуги", count: null },
      { label: "Агенты", count: 5 },
      { label: "О компании", count: null },
    ],
  },
  activeTab: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:activeTab"]);

const updateTab = (index) => {
  emit("update:activeTab", index);
};
</script>

<style scoped>
.company-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.header-logo {
  border-radius: 16px;
}

.company-name {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #18181b;
}

.company-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: #52525b;
  line-height: 1.5;
}

.info-container {
  display: flex;
  align-items: center;
}

.dot-divider {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #71717a;
  margin: 0 8px;
}

.contact-btn {
  height: 56px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
}

.navigation-tabs {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.tab-btn {
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: #27272a;
  text-transform: none;
  letter-spacing: 0;
  border: 1px solid #e4e4e7 !important;
  background-color: #f4f4f5;
  border-radius: 16px !important;
  padding: 0 20px !important;
  height: 48px;
}

.active-tab {
  background-color: #ffffff;
  border-width: 2px !important;
  border-color: #e4e4e7 !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.tab-count {
  font-size: 16px;
  color: #71717a;
  margin-left: 4px;
}
</style>
