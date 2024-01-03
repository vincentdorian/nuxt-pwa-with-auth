<script setup>
definePageMeta({
	layout: false,
})

const { loggedIn } = useUserSession()

const session = useSessionStore()

const state = reactive({
	name: '',
})

if (loggedIn.value)
	navigateTo('/')

async function login() {
	await session.signIn(state.name)

	await navigateTo('/')
}
</script>

<template>
	<UContainer>
		<UCard class="mt-32 max-w-md mx-auto">
			<p class="mt-4">
				You are not logged in. Enter your name to login.
			</p>

			<UForm :state="state" class="mt-4" @submit="login()">
				<UInput
					v-model="state.name"
					label="Name"
				/>

				<UButton type="submit" class="mt-4">
					Login
				</UButton>
			</UForm>
		</UCard>
	</UContainer>
</template>
