<template>
  <TheNavbar />
  <CompanyHeader
    logo="/icons/header-logo.svg"
    companyName="Наследие"
    verifiedText="Документы проверены"
    :rating="4.7"
    :reviewsCount="19"
    reviewsText="отзывов"
    contactBtnText="Показать номер телефона"
    :tabs="tabs"
    :activeTab="activeTab"
    @update:activeTab="updateActiveTab"
  />

  <v-container class="content-container py-6" v-if="activeTab === 0">
    <ProductsGallery :products="products" :categories="categories" />
  </v-container>

  <v-container class="py-6" v-else-if="activeTab === 1">
    <AgentsList v-if="agentsLoaded" :agents="agents" />
    <div v-else class="d-flex justify-center pa-8">
      <v-progress-circular indeterminate color="#337566"></v-progress-circular>
    </div>
  </v-container>

  <v-container class="py-6" v-else-if="activeTab === 2">
    <CompanyInfo :company="companyData" />
  </v-container>

  <TheFooter
    copyrightText="Annonce 2023"
    :links="['Документы', 'О компании']"
  />
  <DevDialog ref="devDialog" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const tabs = [
  { label: "Товары и услуги", count: null },
  { label: "Агенты", count: 5 },
  { label: "О компании", count: null },
];

const activeTab = ref(0);

const updateActiveTab = (index) => {
  activeTab.value = index;
};

const categories = ref([
  { id: "all", name: "Все товары и услуги", count: null },
  { id: "category1", name: "Категория 1", count: null },
  { id: "graves", name: "Гробы", count: 5 },
  { id: "urns", name: "Урны", count: 12 },
  { id: "category2", name: "Категория 2", count: null },
  { id: "coffins", name: "Тапки", count: 2 },
  { id: "covers", name: "Покрывало", count: 1 },
]);

const products = ref([
  {
    id: 1,
    image: "/images/products/product_01.jpg",
    views: 255,
    date: "2 дня",
    price: 4800000,
    title: "2-к. квартира, 46 м², 1/5 эт.",
    description: "Уютная квартира в центре города",
    categoryId: "category1",
  },
  {
    id: 2,
    image: "/images/products/product_02.jpg",
    views: 128,
    date: "1 день",
    price: 450000,
    title: "Цифровое пианино Nord Stage 3",
    description: "Профессиональное цифровое пианино",
    categoryId: "category1",
  },
  {
    id: 3,
    image: "/images/products/product_03.jpg",
    views: 89,
    date: "3 дня",
    price: 3285000,
    title: "Hyundai Sonata 2.5 AT, 2022, 36 км",
    description: "Автомобиль в идеальном состоянии",
    categoryId: "graves",
  },
  {
    id: 4,
    image: "/images/products/product_04.jpg",
    views: 310,
    date: "6 дней",
    price: 4800000,
    title: "2-к. квартира, 40 м², 10 эт.",
    description: "С мебелью и ремонтом",
    categoryId: "urns",
  },
  {
    id: 5,
    image: "/images/products/product_05.jpg",
    views: 255,
    date: "2 дня",
    price: 4800000,
    title: "2-к. квартира, 46 м², 1/5 эт.",
    description: "Уютная квартира в центре города",
    categoryId: "category1",
  },
  {
    id: 6,
    image: "/images/products/product_06.jpg",
    views: 128,
    date: "1 день",
    price: 450000,
    title: "Цифровое пианино Nord Stage 3",
    description: "Профессиональное цифровое пианино",
    categoryId: "category1",
  },
  {
    id: 7,
    image: "/images/products/product_07.jpg",
    views: 89,
    date: "3 дня",
    price: 3285000,
    title: "Hyundai Sonata 2.5 AT, 2022, 36 км",
    description: "Автомобиль в идеальном состоянии",
    categoryId: "graves",
  },
  {
    id: 8,
    image: "/images/products/product_08.jpg",
    views: 310,
    date: "6 дней",
    price: 4800000,
    title: "2-к. квартира, 40 м², 10 эт.",
    description: "С мебелью и ремонтом",
    categoryId: "urns",
  },
]);

const agents = ref([]);
const agentsLoaded = ref(false);

const companyData = ref({
  description:
    "Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.",
  hours: "Сегодня с 8:00 до 23:00",
  address: "Ростов на Дону, Воронежская ул., 42А корп. 1",
  todayHours: "Сегодня с 8:00 до 23:00",
  weekdayHours: "с 8:00 до 23:00",
  saturdayHours: "с 9:00 до 21:00",
  sundayHours: "выходной",
});

onMounted(() => {
  watch(activeTab, (newVal) => {
    if (newVal === 1 && !agentsLoaded.value) {
      setTimeout(() => {
        agents.value = [
          {
            id: 1,
            name: "Дмитрий Хитрый",
            rating: "4.7",
            reviews: "19 отзывов",
            verified: true,
            text: "Помог справиться с потерей и организовать похороны для 126 семей бла бла бла бла бла ну и еще чуть описания, чтобы дойти до конца строки и текста",
            photo: "/images/avatars/avatar_1.png",
          },
          {
            id: 2,
            name: "Апполинарий Землеперекопский",
            rating: "4.7",
            reviews: "11 отзывов",
            text: "ППомог справиться с потерей и организовать похороны для 126 семей бла бла бла бла бла ну и еще чуть описания, чтобы дойти до конца строки и текста",
            photo: "/images/avatars/avatar_2.png",
          },
          {
            id: 3,
            name: "Федор Сумкин",
            rating: "4.7",
            reviews: "18 отзывов",
            text: "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текста",
            photo: "/images/avatars/avatar_3.png",
          },
          {
            id: 4,
            name: "Козлова Мария",
            rating: "4.7",
            verified: true,
            reviews: "18 отзывов",
            text: "Помог справиться с потерей и организовать похороны для 126 семей бла бла бла бла бла ну и еще чуть описания, чтобы дойти до конца строки и текста",
            photo: "/images/avatars/avatar_4.png",
          },
          {
            id: 5,
            name: "Василий Копушин",
            rating: "4.7",
            reviews: "7 отзывов",
            verified: true,
            text: "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текста",
            photo: "/images/avatars/avatar_5.png",
          },

          {
            id: 6,
            name: "Феофан Кусакин",
            rating: "4.7",
            reviews: "8 отзывов",
            verified: true,
            text: "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текста",
            photo: "/images/avatars/avatar_6.png",
          },
        ];
        agentsLoaded.value = true;
      }, 1000);
    }
  });
});
</script>

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

.content-container {
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
}
</style>
