<script setup lang="ts">
const session = useSessionStore()

const navItems = [
	{ name: 'Home', path: '/home' },
	{ name: 'Secure', path: '/secure' },
]

async function logout() {
	await session.signOut()

	await navigateTo('/login')
}
</script>

<template>
	<div v-if="session.isLoggedIn">
		<header>
			<UContainer>
				<div class="h-20 flex flex-row items-center justify-between">
					<div class="flex flex-row items-center gap-x-8">
						<AppLogo class="h-12 w-auto" />
						<nav class="flex flex-row items-center gap-x-4">
							<NuxtLink v-for="item in navItems" :key="item.path" :to="item.path">
								{{ item.name }}
							</NuxtLink>
						</nav>
					</div>

					<div class="flex flex-row items-center gap-x-4">
						<div v-if="session.user">
							Logged in as {{ session.user?.name }}
						</div>

						<UButton @click="logout()">
							Logout
						</UButton>
					</div>
				</div>
			</UContainer>
		</header>
		<slot />
	</div>
</template>
