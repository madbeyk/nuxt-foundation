// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['foundation-sites']
  },
  plugins: [
    { src: '~/plugins/foundation.client.js', mode: 'client' }
  ],
  vite: {
    optimizeDeps: {
      include: ['jquery', 'foundation-sites']
    },
    define: {
      'process.env.FOUNDATION_AUTOPAUSE': false,
      global: {}
    }
  }
})