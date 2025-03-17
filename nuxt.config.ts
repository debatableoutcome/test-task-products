export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/device", "@nuxt/image", "@nuxt/eslint"],

  device: {
    refreshOnResize: true,
    defaultUserAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    breakpoints: {
      mobile: 960,
      tablet: 1024,
      desktop: 1280,
    },
  },

  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/styles/main.scss",
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
