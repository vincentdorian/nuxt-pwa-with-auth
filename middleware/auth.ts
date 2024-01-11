import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware((to) => {
	if (process.server)
    	return

	if (isHydrated.value)
		return handleAuth(to)

	onHydrated(() => handleAuth(to))
})

function handleAuth(to: RouteLocationNormalized) {
	const session = useSessionStore()

	if (!session?.isLoggedIn)
		return navigateTo('/login')

	if (to.path === '/')
	  return navigateTo('/home')
}
