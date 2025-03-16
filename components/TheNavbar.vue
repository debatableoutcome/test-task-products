<template>
  <div>
    <v-app-bar color="#FFF7EB" elevation="0" height="64">
      <div class="d-flex align-center w-100 px-8">
        <div class="logo-container mr-3" @click="showDevDialog">
          <v-img src="/images/logo.svg" width="156" height="48"></v-img>
        </div>

        <v-btn
          class="categories-btn"
          color="#E8E8E8"
          rounded="pill"
          variant="flat"
          @click="showDevDialog"
        >
          <v-img src="/icons/tiles.svg" alt="Tiles" class="tiles-icon"></v-img>
          {{ categoriesText }}
        </v-btn>

        <v-spacer></v-spacer>

        <div
          class="location-container d-flex align-center"
          @click="showDevDialog"
        >
          <img src="/icons/pin.svg" alt="Pin" class="pin-icon" />
          <span class="ml-1 mr-6">{{ cityName }}</span>
        </div>

        <v-divider class="mr-3" vertical thickness="1"></v-divider>

        <v-btn
          color="#337566"
          class="post-ad-btn"
          rounded="pill"
          @click="showDevDialog"
        >
          {{ postAdText }}
        </v-btn>

        <div class="custom-profile-btn ml-4" @click="showDevDialog">
          <img src="/icons/burger.svg" alt="Menu" class="burger-icon" />
          <img :src="profilePicture" alt="Profile" class="profile-pic" />
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { useDevDialog } from "~/composables/useDevDialog";

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

const { showDevDialog } = useDevDialog();
</script>

<style scoped>
.categories-btn {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  cursor: pointer;
}

.location-container {
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
}

.post-ad-btn {
  text-transform: none;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  letter-spacing: 0;
  color: white;
  cursor: pointer;
}

.custom-profile-btn {
  display: flex;
  align-items: center;
  background-color: #e8e8e8;
  border-radius: 40px;
  height: 40px;
  padding: 0 0 0 12px;
  cursor: pointer;
}

.tiles-icon,
.burger-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.pin-icon {
  width: 16px;
  height: 16px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 0 20px 20px 0;
  object-fit: cover;
}

.logo-container {
  cursor: pointer;
}
@media (max-width: 600px) {
  .logo-container {
    display: flex;
    justify-content: center;
  }

  .profile-pic {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }
}
</style>
