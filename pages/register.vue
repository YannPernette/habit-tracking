<script setup lang='ts'>
const username = ref('')
const password = ref('')

async function onSubmit(event: Event) {
    event.preventDefault()

    const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
    })

    // Vérification de la réponse
    if (!response.ok) {
        throw new Error(`Erreur : ${response.statusText}`)
    }

    const data = await response.json()
    
    const cookieJwt = useCookie('api_tracking_jwt')
    cookieJwt.value = data.token
}
</script>


<template>
    <div style="margin-top: 100px;" class="mx-page">
        <h1>Page d'inscription</h1>

        <form @submit="onSubmit">
            <div>
                <label for="username">Nom d'utilisateur</label>
                <input id="username" v-model="username" type="username">
            </div>
            <div>
                <label for="password">Mot de passe</label>
                <input id="password" v-model="password" type="password">
            </div>
            <div>
                <button type="submit">ENVOYER</button>
            </div>
        </form>
    </div>
</template>


<style lang='scss'></style>