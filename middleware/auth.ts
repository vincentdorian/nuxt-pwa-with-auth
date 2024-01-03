import type { RouteLocationNormalized } from 'vue-router'

const { loggedIn } = useUserSession()

export default defineNuxtRouteMiddleware((to) => {
	if (process.server)
    	return

	if (isHydrated.value)
		return handleAuth(to)

	onHydrated(() => handleAuth(to))
})

function handleAuth(to: RouteLocationNormalized) {
	if (!loggedIn.value)
		return navigateTo('/login')

	if (to.path === '/')
	  return navigateTo('/home')
}
