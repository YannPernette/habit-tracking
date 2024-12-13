// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/sanity', 'nuxt-swiper'],

  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/icon', pathPrefix: false }
  ],

  sanity: {
    projectId: "bl3s2stx",
    dataset: "production",
  },

  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: `
            @use "@/assets/scss/foundations/functions" as *;
            @use "@/assets/scss/foundations/variables" as *;
            @use "@/assets/scss/foundations/mixins" as *;
          `,
        },
      },
    },
  }
})