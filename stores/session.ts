export const useSessionStore = defineStore('session', () => {
	const user = ref(null)

	async function signIn(name: string) {
		await $fetch('/api/auth/login', {
			method: 'POST',
			body: JSON.stringify({ name }),
		})

		await useUserSession().fetch()

		user.value = useUserSession().user.value

		navigateTo('/')
	}

	async function signOut() {
		await useUserSession().clear()

		await useUserSession().fetch()

		user.value = null
		navigateTo('/login')
	}

	const isLoggedIn = computed(() => !!user.value)

	return {
		user,
		signIn,
		signOut,
		isLoggedIn,
	}
}, {
	persist: {
		storage: persistedState.localStorage,
	},
})
