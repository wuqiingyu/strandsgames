// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],

  // Components configuration
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // PWA Configuration
  pwa: {
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    manifest: {
      name: 'Strands Games Online',
      short_name: 'Strands Games',
      description: 'Play NYT Strands game online with daily puzzles, hints, and complete solutions',
      theme_color: '#2563eb',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icons/icon.svg',
          sizes: 'any',
          type: 'image/svg+xml'
        },
        {
          src: '/favicon.ico',
          sizes: '48x48',
          type: 'image/x-icon'
        }
      ]
    }
  },

  // App config
  app: {
    head: {
      title: 'Strands Games Online - NYT Strands Game Puzzles & Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Play NYT Strands game online with daily puzzles, hints, and complete solutions. Find words, solve themes, and master every Strands puzzle challenge.' 
        },
        {
          name: 'keywords',
          content: 'strands game, nyt strands, word puzzles, daily strands, strands solver, word game, new york times'
        },
        { name: 'theme-color', content: '#2563eb' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Strands Games' }
      ],
      link: [
        { rel: 'canonical', href: 'https://strandsgames.net' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icons/icon.svg' },
        { rel: 'apple-touch-icon', href: '/icons/icon.svg' }
      ],
      script: [
        {
          async: true,
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6854228552748383',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

  // CSS
  css: [
    '~/assets/css/main.css'
  ],

  // Cloudflare Pages optimization
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: false,
      routes: [
        '/'
      ]
    }
  },

  // Build optimization
  build: {
    transpile: ['vue-toastification']
  },

  // Experimental features for better performance
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://strandsgames.net'
    }
  }
})
