export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/device", "@nuxt/image", "@nuxt/eslint"],

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/styles/main.scss", // Добавляем глобальные стили
  ],

  build: {
    transpile: ["vuetify"],
  },

  typescript: {
    strict: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    optimizeDeps: {
      include: ["jwt-decode"],
    },
  },

  compatibilityDate: "2025-03-13",
});
