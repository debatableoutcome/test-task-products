<template>
  <v-app-bar color="#FFF7EB" elevation="0" height="72">
    <div class="d-flex align-center w-100 px-4">
      <div class="logo-container mr-6">
        <v-img src="/images/logo.svg" width="100" height="32"></v-img>
      </div>

      <v-btn
        class="categories-btn"
        color="#E8E8E8"
        rounded="pill"
        variant="flat"
      >
        <v-icon class="mr-2">mdi-view-grid-outline</v-icon>
        {{ categoriesText }}
      </v-btn>

      <v-spacer></v-spacer>

      <div class="location-container d-flex align-center">
        <v-icon>mdi-map-marker-outline</v-icon>
        <span class="ml-2 pr-4">{{ cityName }}</span>
      </div>

      <v-divider vertical class="mx-4" thickness="1"></v-divider>

      <v-btn color="#337566" class="post-ad-btn" rounded="pill">
        {{ postAdText }}
      </v-btn>

      <div class="custom-profile-btn ml-4">
        <img src="/icons/burger.svg" alt="Menu" class="burger-icon" />
        <img :src="profilePicture" alt="Profile" class="profile-pic" />
      </div>
    </div>
  </v-app-bar>
</template>
<script setup lang="ts">
defineProps({
  categoriesText: {
    type: String,
    default: "Все категории",
  },
  cityName: {
    type: String,
    default: "Ростов-на-Дону",
  },
  postAdText: {
    type: String,
    default: "Разместить объявление",
  },
  profilePicture: {
    type: String,
    default: "/images/profile-picture.png",
  },
});
</script>

<style scoped>
.categories-btn {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}

.location-container {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
}

.post-ad-btn {
  text-transform: none;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  letter-spacing: 0;
  color: white;
}

.custom-profile-btn {
  display: flex;
  align-items: center;
  background-color: #e8e8e8;
  border-radius: 40px;
  height: 40px;
  padding: 0 0 0 12px;
}

.burger-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 0 20px 20px 0;
  object-fit: cover;
}
</style>
