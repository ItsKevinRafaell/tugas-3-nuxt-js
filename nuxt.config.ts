// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
    },
  
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@pinia/nuxt"],

  app: {
    head: {
      link: [
      { rel: "stylesheet", href:
      "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
      ],
    }
    },


  pwa:{
    manifest:{
      name: 'Perpustakaan SMK Negeri 1 Balikpapan',
      short_name: 'Perpustakaan SMK Negeri 1 Balikpapan',
      theme_color: '#fff',
      background_color: '#fff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        }
      ]
    },
    devOptions: {
      enabled:true
    }
  }
})