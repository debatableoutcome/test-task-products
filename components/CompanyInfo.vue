<template>
  <div class="company-info" :class="{ 'mobile-view': isMobile }">
    <div v-if="isMobile" class="mobile-header">
      <div class="logo-container">
        <img src="/icons/header-logo.svg" alt="Лого" class="company-logo" />
      </div>
      <h1 class="company-title">{{ headerInfo.companyName }}</h1>
      <div class="company-verification">
        <div class="verification-badge">
          <img src="/icons/verified.svg" alt="Verified" class="verified-icon" />
          <span class="verification-text">Документы проверены</span>
        </div>
        <span class="separator">•</span>
        <div class="rating-container">
          <img src="/icons/star.svg" alt="Rating" class="rating-icon" />
          <span>{{ headerInfo.rating }}</span>
          <span class="reviews-count"
            >{{ headerInfo.reviewsCount }} отзывов</span
          >
        </div>
      </div>
    </div>

    <div class="tab-body">
      <div class="company-about mb-6">
        <h2 class="section-title mb-4">О компании</h2>
        <p class="company-description">
          {{ company.description }}
        </p>
      </div>

      <v-expansion-panels class="mb-6 hours-panel" elevation="0">
        <v-expansion-panel>
          <v-expansion-panel-title class="hours-title">
            <div>
              <h2 class="section-title">Режим работы</h2>
              <p class="today-hours">{{ todayHoursMessage }}</p>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="full-schedule">
              <p class="schedule-item">
                Будни -
                <span class="hours-value">{{ company.weekdayHours }}</span>
              </p>
              <p class="schedule-item">
                Суббота -
                <span class="hours-value">{{ company.saturdayHours }}</span>
              </p>
              <p class="schedule-item">
                Воскресенье -
                <span class="hours-value">{{ company.sundayHours }}</span>
              </p>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>

      <div class="company-location">
        <div v-if="isMobile" class="map-container mb-4">
          <v-img
            src="/images/MapMob.png"
            cover
            class="map-image"
            height="88"
          ></v-img>
        </div>

        <div class="location-info mb-4">
          <h2 class="section-title mb-4">Местоположение</h2>
          <p class="company-address">{{ company.address }}</p>
        </div>

        <div v-if="!isMobile" class="map-container-desktop">
          <v-img
            src="/images/MapDesktop.png"
            cover
            class="map-image-desktop"
          ></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDevice } from "@/composables/useDevice";

const { isMobile } = useDevice();
const props = defineProps({
  company: {
    type: Object,
    required: true,
    default: () => ({
      description:
        "Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.",
      weekdayHours: "с 8:00 до 23:00",
      saturdayHours: "с 9:00 до 21:00",
      sundayHours: "выходной",
      address: "Ростов на Дону, Воронежская ул., 42А корп. 1",
    }),
  },
  headerInfo: {
    type: Object,
    default: () => ({
      companyName: "Наследие",
      rating: "4.3",
      reviewsCount: "19",
    }),
  },
});

// Определяем текущий день недели и возвращаем соответствующее сообщение о часах работы
const todayHoursMessage = computed(() => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 - воскресенье, 1 - понедельник, и т.д.

  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const dayName = new Intl.DateTimeFormat("ru-RU", options).format(today);
  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

  let hoursText = "";

  if (dayOfWeek === 0) {
    hoursText = props.company.sundayHours;
  } else if (dayOfWeek === 6) {
    hoursText = props.company.saturdayHours;
  } else {
    hoursText = props.company.weekdayHours;
  }

  if (hoursText.toLowerCase().includes("выходной")) {
    return `Сегодня (${capitalizedDayName}) - выходной`;
  }

  return `Сегодня (${capitalizedDayName}) ${hoursText}`;
});
</script>

<style scoped>
.company-info {
  width: 100%;
}

.mobile-header {
  padding: 16px 0;
  text-align: center;
  background-color: white;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.company-logo {
  width: 72px;
  height: 72px;
}

.company-title {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
}

.company-verification {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.verification-badge,
.rating-container {
  display: flex;
  align-items: center;
}

.verified-icon,
.rating-icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
}

.verification-text {
  font-size: 14px;
  color: #333;
}

.separator {
  margin: 0;
  color: #888;
}

.reviews-count {
  color: #666;
  margin-left: 4px;
}

.tab-body {
  max-width: 560px;
  margin: 0 auto;
  padding: 0 16px;
}

.mobile-view .tab-body {
  padding: 0;
  max-width: 100%;
}

.section-title {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #18181b;
}

.mobile-view .section-title {
  font-size: 20px;
}

.hours-title :deep(.section-title) {
  color: #71717a;
  margin-bottom: 4px;
}

.company-about {
  padding: 20px;
}

.mobile-view .company-about {
  padding: 16px;
}

.company-description,
.company-address {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #52525b;
}

.mobile-view .company-description,
.mobile-view .company-address {
  font-size: 15px;
}

.company-address {
  color: #337566;
}

.hours-panel {
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: none;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}

.mobile-view .hours-panel {
  border-radius: 0;
}

.hours-panel :deep(.v-expansion-panel) {
  background-color: transparent;
  box-shadow: none;
}

.hours-panel :deep(.v-expansion-panel-title) {
  padding: 20px;
  min-height: auto;
  flex-direction: column;
  align-items: flex-start;
}

.hours-panel :deep(.v-expansion-panel-title__overlay) {
  display: none;
}

.hours-panel :deep(.v-expansion-panel-title > .v-expansion-panel-title__icon) {
  color: #71717a;
  position: absolute;
  right: 20px;
  top: 20px;
}

.today-hours {
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #71717a;
  margin: 0;
  font-variant-numeric: lining-nums proportional-nums;
}

.mobile-view .today-hours {
  font-size: 15px;
}

.full-schedule {
  padding-top: 8px;
}

.schedule-item {
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #71717a;
  margin-bottom: 8px;
  font-variant-numeric: lining-nums proportional-nums;
}

.mobile-view .schedule-item {
  font-size: 15px;
}

.hours-value {
  color: #71717a;
  font-weight: 500;
}

.company-location {
  display: flex;
  flex-direction: column;
}

.location-info {
  padding: 20px;
  width: 100%;
}

.mobile-view .location-info {
  padding: 16px;
}

.map-container {
  width: 100%;
  height: 88px;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
}

.map-container-desktop {
  border-radius: 12px 12px 12px 0;
  overflow: hidden;
  height: 132px;
  width: 200px;
}

.map-image-desktop {
  border: 1px solid #e4e4e7;
  height: 100%;
  width: 100%;
  border-radius: 12px 12px 12px 0 !important;
}

@media (min-width: 768px) {
  .company-location {
    flex-direction: row;
    gap: 24px;
  }

  .location-info {
    flex: 1;
    max-width: 60%;
  }
}
</style>
