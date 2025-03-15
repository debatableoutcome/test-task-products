<template>
  <div class="tab-body px-4">
    <div class="company-about mb-8 pa-5">
      <h2 class="section-title mb-4">О компании</h2>
      <p class="company-description">
        {{ company.description }}
      </p>
    </div>

    <v-expansion-panels class="mb-8 hours-panel" elevation="0">
      <v-expansion-panel>
        <v-expansion-panel-title class="hours-title">
          <div>
            <h2 class="section-title">Режим работы</h2>
            <p class="today-hours">{{ company.todayHours }}</p>
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

    <div class="company-location d-flex flex-column flex-md-row align-start">
      <div class="location-info mb-4 mb-md-0 flex-grow-1 pa-5">
        <h2 class="section-title mb-4">Местоположение</h2>
        <p class="company-address">{{ company.address }}</p>
      </div>
      <div class="map-container ml-md-4">
        <v-img src="/images/MapDesktop.png" cover class="map-image"></v-img>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  company: {
    type: Object,
    required: true,
    default: () => ({
      description:
        "Копией занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.",
      todayHours: "Сегодня с 8:00 до 23:00",
      weekdayHours: "с 8:00 до 23:00",
      saturdayHours: "с 9:00 до 21:00",
      sundayHours: "выходной",
      address: "Ростов на Дону, Воронежская ул., 42А корп. 1",
    }),
  },
});
</script>

<style scoped>
.tab-body {
  max-width: 560px;
  margin: 0 auto;
}

.section-title {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #18181b;
}

.hours-title :deep(.section-title) {
  color: #71717a;
  margin-bottom: 4px;
}

.company-description,
.company-address {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #52525b;
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

.hours-value {
  color: #71717a;
  font-weight: 500;
}

.map-container {
  border-radius: 12px 12px 12px 0;
  overflow: hidden;
  height: 132px;
  width: 200px;
}

.map-image {
  border: 1px solid #e4e4e7;
  height: 100%;
  width: 100%;
  border-radius: 12px 12px 12px 0 !important;
}

@media (min-width: 768px) {
  .company-location {
    gap: 24px;
  }

  .location-info {
    max-width: 60%;
  }
}
</style>
