<script setup>
const { loggedIn, user, session, clear, fetch: fetchSession } = useUserSession()

if (loggedIn.value) {
  navigateTo('/')
}

const login = async () => {
  const {data} = await useFetch('/api/auth/login')

  await fetchSession()

  await navigateTo('/')

}
</script>

<template>
  <div v-if="loggedIn">
    <h1>Welcome {{ user.login }}!</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <button @click="clear">Logout</button>
  </div>
  <div v-else>
    <h1>Not logged in</h1>
    <button @click="login()">
    Login
    </button>
  </div>
</template>