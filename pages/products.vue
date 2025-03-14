<template>
  <TheNavbar />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
@import "@/assets/styles/typography.scss";

.brand-text {
  font-family: "Inter", sans-serif;
  font-size: $font-size-lg;
  font-weight: 600;
  letter-spacing: normal;
}

.nav-btn {
  font-family: "Inter", sans-serif;
  font-size: $font-size-base;
  font-weight: 500;
  letter-spacing: normal;
}

.profile-btn {
  font-family: "Inter", sans-serif;
  font-size: $font-size-base;
  font-weight: 500;
  letter-spacing: normal;
}

:deep(.v-btn__content) {
  letter-spacing: normal;
}
</style>
