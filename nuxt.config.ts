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
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/games\.blrssco\.com\//,
          handler: 'CacheFirst',
          options: {
            cacheName: 'games-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 // 24 hours
            }
          }
        }
      ]
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
    manifest: {
      name: 'Strands Games Online',
      short_name: 'Strands Games',
      description: 'Play NYT Strands game online with daily puzzles, hints, and complete solutions',
      theme_color: '#2563eb',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      categories: ['games', 'puzzle', 'word'],
      lang: 'en',
      dir: 'ltr',
      icons: [
        {
          src: '/icons/icon-72x72.svg',
          sizes: '72x72',
          type: 'image/svg+xml'
        },
        {
          src: '/icons/icon-96x96.svg',
          sizes: '96x96',
          type: 'image/svg+xml'
        },
        {
          src: '/icons/icon-128x128.svg',
          sizes: '128x128',
          type: 'image/svg+xml'
        },
        {
          src: '/icons/icon-144x144.svg',
          sizes: '144x144',
          type: 'image/svg+xml'
        },
        {
          src: '/icons/icon-152x152.svg',
          sizes: '152x152',
          type: 'image/svg+xml'
        },
        {
          src: '/icons/icon-192x192.svg',
          sizes: '192x192',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        },
        {
          src: '/icons/icon-384x384.svg',
          sizes: '384x384',
          type: 'image/svg+xml'
        },
        {
          src: '/icons/icon-512x512.svg',
          sizes: '512x512',
          type: 'image/svg+xml',
          purpose: 'any maskable'
        },
        {
          src: '/icons/icon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any maskable'
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
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2472509388621380',
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
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/contact',
        '/privacy-policy',
        '/terms',
        '/cookies'
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
