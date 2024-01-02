<script setup lang="ts">
const { loggedIn, user, session, clear } = useUserSession()

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Secure', path: '/secure'}
]

async function logout(){
    await clear()

    await navigateTo('/login')
}
</script>
<template>
    <div>
        <header>
            <nav>
                <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path">
                    {{ item.name  }}
                </NuxtLink>
            </nav>
        </header>
        <div v-if="loggedIn">
            {{ user }}
            <button @click="logout()">Logout</button>  
        </div>
        <slot/>
    </div>

</template>