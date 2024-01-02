// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-auth-utils',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  routeRules: {
    '/login': {
      prerender: true
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/, /^\/secure$/],
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: '^/login$',
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 10, // use cache if network response is not arrived within this duration
            cacheName: 'my-cache',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ]
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
