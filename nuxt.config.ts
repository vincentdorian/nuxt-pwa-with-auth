// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
        'nuxt-auth-utils',
        '@vite-pwa/nuxt',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/ui',
        '@vueuse/nuxt',
        "@nuxt/image"
    ],
	routeRules: {
		'/': {
			prerender: true,
		},
	},
	experimental: {
		appManifest: true,
		payloadExtraction: true,
		asyncContext: true,
		restoreState: true,
	},
	app: {
		keepalive: true,
	},
	nitro: {
		prerender: {
			crawlLinks: true,
		},
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
			globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
			navigateFallbackAllowlist: [/\/$/],
			runtimeCaching: [{
				urlPattern: ({ request, sameOrigin, url }) => {
					// eslint-disable-next-line no-console
					console.log(url)
					return sameOrigin && (request.mode === 'navigate' || /^\/api\//.test(url.pathname))
				},
				handler: 'NetworkOnly',
				options: {
					plugins: [{
						handlerDidError: async () => Response.redirect('/?error', 302),
						cacheWillUpdate: async () => null,
					}],
				},
			}],
		},
		devOptions: {
			enabled: true,
			type: 'module',
		},
	},
})
