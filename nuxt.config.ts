// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    apiSecret: "123",

    public: {
      apiKey: process.env.FIRE_API_KEY,
      authDomain: process.env.FIRE_AUTH_DOMAIN,
      projectId: process.env.FIRE_PROJECT_ID,
      storageBucket: process.env.FIRE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIRE_MESSAGING_SENDERID,
      appId: process.env.FIRE_APP_ID,
      measurementId: process.env.FIRE_MEASUREMENT_ID,
    },
  },
});
