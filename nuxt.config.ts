// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'nuxt-auth-utils',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@nuxt/image',
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
})
