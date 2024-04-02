// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts', '@nuxt/image'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  routeRules: {
    '/': { isr: true },
    '/pdp/*': { isr: true },
  },

  runtimeConfig: {
    ctpClientId: process.env.CTP_CLIENT_ID,
    ctpClientSecret: process.env.CTP_CLIENT_SECRET,
    ctpUrl: process.env.CTP_URL,
    ctpProject: process.env.CTP_PROJECT
  },

  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [700],
      Inter: [400],
    }
  },

  image: {
    providers: {
      hygraph: {
        baseurl: "https://media.graphassets.com"
      }
    }
  }
})