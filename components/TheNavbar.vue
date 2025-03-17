<template>
  <div>
    <!-- Desktop -->
    <v-app-bar v-if="!isMobileView" color="#FFF7EB" elevation="0" height="64">
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

    <!-- Mobile-->
    <div v-else class="mobile-navbar">
      <div class="mobile-content">
        <button class="menu-button" @click="showDevDialog">
          <v-icon>mdi-menu</v-icon>
        </button>

        <div class="logo" @click="showDevDialog">
          <v-img src="/images/logo.svg" width="116" height="36"></v-img>
        </div>

        <div class="bag-wrapper" @click="showDevDialog">
          <img src="/icons/bag.svg" alt="Bag" class="bag-icon" />
          <span class="bag-badge">9</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDevDialog } from "~/composables/useDevDialog";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Проверка на мобильное устройство без использования $device
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1200
);
const isMobileView = computed(() => windowWidth.value < 960);

// Обработчик изменения размера окна
const updateWidth = () => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
  }
};

// Установка и удаление слушателя событий
onMounted(() => {
  updateWidth(); // Инициализация ширины при монтировании
  window.addEventListener("resize", updateWidth);
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWidth);
  }
});

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
/* Desktop styles */
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

/* Mob styles */
.mobile-navbar {
  background-color: #fff7eb;
  width: 100%;
  height: 56px;
}

.mobile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
  max-width: 100%;
  position: relative;
}

.menu-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.bag-wrapper {
  position: relative;
  cursor: pointer;
}

.bag-icon {
  width: 24px;
  height: 24px;
}

.bag-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #337566;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  font-weight: 600;
}
</style>
