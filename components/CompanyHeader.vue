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
      <div class="phone-action-container">
        <v-btn
          color="#337566"
          variant="flat"
          rounded="lg"
          class="contact-btn"
          @click="togglePhone"
        >
          {{ isPhoneVisible ? "Скрыть номер телефона" : contactBtnText }}
        </v-btn>

        <v-slide-y-transition>
          <div v-if="isPhoneVisible" class="phone-popup">
            <div class="phone-popup-content">
              <span class="phone-number">{{ phoneNumber }}</span>
              <div class="phone-actions">
                <v-btn
                  variant="text"
                  size="small"
                  color="#337566"
                  @click="copyPhoneToClipboard"
                  class="copy-btn"
                >
                  <v-icon size="small" class="mr-1">mdi-content-copy</v-icon>
                  Копировать
                </v-btn>
                <v-btn
                  variant="text"
                  size="small"
                  color="#52525b"
                  @click="callPhone"
                  class="call-btn"
                >
                  <v-icon size="small" class="mr-1">mdi-phone</v-icon>
                  Позвонить
                </v-btn>
              </div>
            </div>
          </div>
        </v-slide-y-transition>
      </div>
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

    <!-- Снэкбар для уведомления о копировании -->
    <v-snackbar
      v-model="showCopySnackbar"
      :timeout="2000"
      color="#337566"
      location="top"
    >
      Номер скопирован в буфер обмена
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
  phoneNumber: {
    type: String,
    default: "+7 (999) 123-45-67",
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

const isPhoneVisible = ref(false);
const showCopySnackbar = ref(false);

const togglePhone = () => {
  isPhoneVisible.value = !isPhoneVisible.value;
};

const copyPhoneToClipboard = () => {
  navigator.clipboard.writeText(props.phoneNumber).then(() => {
    showCopySnackbar.value = true;
  });
};

const callPhone = () => {
  window.location.href = `tel:${props.phoneNumber.replace(/\D/g, "")}`;
};

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

.phone-action-container {
  position: relative;
  width: 100%;
}

.contact-btn {
  height: 56px;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: white;
  width: 100%;
  min-width: 240px;
}

.phone-popup {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
}

.phone-popup-content {
  padding: 16px;
}

.phone-number {
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #18181b;
  margin-bottom: 12px;
  text-align: center;
}

.phone-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.copy-btn,
.call-btn {
  text-transform: none;
  letter-spacing: 0;
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
