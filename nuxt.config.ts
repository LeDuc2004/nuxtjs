// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["nuxt-swiper", "@nuxt/ui-pro", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: ["primary", "secondary"],
    },
  },
  runtimeConfig: {
    public: {
      MICROCMS_API_BASE_URL: process.env.MICROCMS_API_BASE_URL,
      MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    },
  },
});
