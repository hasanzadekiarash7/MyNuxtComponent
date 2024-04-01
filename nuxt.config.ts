// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  // @ts-ignore
  sourcemap: {
    server: true,
    client: true
  },
  // @ts-ignore
  modules: [
    "nuxt-icon",
    "nuxt-swiper",
  ],
  // @ts-ignore
  quasar: {
    plugins: [
      'Notify',
      'Dialog'
    ],
    cssAddon: true,
  },
  // @ts-ignore
  security: {
    corsHandler: {
      origin: '*'
    }
  }
})
