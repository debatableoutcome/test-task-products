<template>
  <div class="company-header">
    <div class="header-content">
      <div class="d-none d-md-block pa-0 ma-0">
        <div class="center-wrapper">
          <div v-if="logo" class="logo-container">
            <img :src="logo" alt="Company logo" class="company-logo" />
          </div>

          <h1 class="company-name">{{ companyName }}</h1>

          <div class="verification-rating">
            <div class="verified">
              <img
                src="/icons/verified.svg"
                alt="Verified"
                class="verified-icon"
              />
              <span>Документы проверены</span>
            </div>
            <span class="dot-divider">•</span>
            <div class="rating">
              <img src="/icons/star.svg" alt="Star" class="star-icon" />
              <span>{{ rating }}</span>
            </div>
            <span class="dot-divider">•</span>
            <span class="reviews">{{ reviewsCount }} отзывов</span>
          </div>

          <button class="phone-button" @click="showPhoneNumber">
            Показать номер телефона
          </button>
        </div>
      </div>

      <v-dialog v-model="phoneDialog" max-width="400">
        <v-card>
          <v-card-title class="phone-dialog-title">
            Номер телефона
          </v-card-title>
          <v-card-text class="phone-dialog-content">
            <div class="phone-number">{{ phoneNumber }}</div>
            <div class="action-buttons">
              <v-btn
                color="#337566"
                variant="filled"
                class="copy-button"
                @click="copyPhoneNumber"
              >
                Копировать
              </v-btn>
              <v-btn
                color="#337566"
                variant="filled"
                class="call-button"
                @click="callPhoneNumber"
              >
                Позвонить
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <!-- Tabs -->
    <div
      ref="tabsContainer"
      class="tabs-container"
      :class="{ 'mobile': isMobile }"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        ref="tabItems"
        class="tab"
        :class="{ 'active': modelValue === index }"
        @click="handleTabClick(index)"
      >
        {{ tab.label }}
        <span v-if="tab.count" class="tab-count">{{ tab.count }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useDevice } from "@/composables/useDevice";
import { useDevDialog } from "@/composables/useDevDialog";

const { isMobile } = useDevice();
const { showDevDialog } = useDevDialog();

// Phone dialog
const phoneDialog = ref(false);
const phoneNumber = ref("+7 (999) 123-45-67");

// Tabs scrolling references
const tabsContainer = ref(null);
const tabItems = ref([]);

const showPhoneNumber = () => {
  phoneDialog.value = true;
};

const copyPhoneNumber = () => {
  navigator.clipboard
    .writeText(phoneNumber.value)
    .then(() => {})
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

const callPhoneNumber = () => {
  window.location.href = `tel:${phoneNumber.value.replace(/[^0-9+]/g, "")}`;
};

const props = defineProps({
  logo: {
    type: String,
    default: "",
  },
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
  tabs: {
    type: Array,
    default: () => [],
  },
  modelValue: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleTabClick = (index) => {
  emit("update:modelValue", index);

  if (isMobile.value && tabsContainer.value && tabItems.value[index]) {
    nextTick(() => {
      const container = tabsContainer.value;
      const tab = tabItems.value[index];

      const containerWidth = container.offsetWidth;
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;

      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    });
  }
};

onMounted(() => {
  if (isMobile.value && props.modelValue !== undefined) {
    nextTick(() => {
      handleTabClick(props.modelValue);
    });
  }
});
</script>

<style scoped>
.company-header {
  margin: 0 auto;
  padding: 16px 0;
  max-width: 400px;
}

.header-content {
  padding: 0 16px;
}

/* Один центрирующий контейнер */
.center-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
}

.logo-container {
  margin-bottom: 12px;
  width: 64px;
  height: 64px;
}

.company-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.company-name {
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0 4px 0;
  color: #000;
}

.verification-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0 16px 0;
  flex-wrap: wrap;
}

.verified {
  display: flex;
  align-items: center;
}

.verified-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.dot-divider {
  margin: 0 8px;
  color: #888;
}

.rating {
  display: flex;
  align-items: center;
}

.star-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.reviews {
  color: #666;
}

.phone-button {
  height: 44px;
  font-weight: 400;
  margin-bottom: 24px;
  background-color: #337566;
  color: white;
  width: 100%;
  max-width: 240px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  padding: 0 16px;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
}

.phone-button:hover {
  background-color: #2a6155;
}

.tabs-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0 16px;
  margin-top: 16px;
}

.tabs-container.mobile {
  overflow-x: auto;
  white-space: nowrap;
  justify-content: flex-start;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x proximity;
  padding-bottom: 8px;
}

.tabs-container.mobile::-webkit-scrollbar {
  display: none;
}

.tab {
  padding: 8px 12px;
  border-radius: 12px;
  background-color: #f8f8f8;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  scroll-snap-align: center;
  border: 1px solid transparent;
  color: #333;
}

.tab.active {
  border: 1px solid #333;
}

.tab-count {
  margin-left: 4px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 13px;
  color: #555;
}

.phone-dialog-title {
  text-align: center;
  padding-top: 20px;
}

.phone-dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.phone-number {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
}

.copy-button,
.call-button {
  flex: 1;
  max-width: 150px;
}

@media (max-width: 767px) {
  .tabs-container {
    padding-bottom: 12px;
  }
}
</style>
