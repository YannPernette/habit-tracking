<script setup lang='ts'>
const username = ref('')
const password = ref('')

const router = useRouter()

async function onSubmit(event: Event) {
  event.preventDefault()

  const response = await fetch('http://localhost:4000/auth/login', {
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

  await router.push('/app/dashboard')
}
</script>


<template>
  <div class="login">
    <div style="margin-top: 100px;" class="mx-page">
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

    <div class="login__background">
      <img class="login__backgroundImg"
        src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="">
    </div>

    <LoginForm />
  </div>
</template>


<style lang="scss">
.login {
  background: rgb(107, 78, 255);
  background: radial-gradient(circle, rgba(107, 78, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
  width: 100vw;
  height: 100vh;
  position: relative;
}

.login__background {
  position: relative;
  width: 100vw;
  height: 100vh;

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(90deg, rgba(153, 144, 255, 1) 0%, rgba(107, 78, 255, 1) 74%);
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
}

.login__backgroundImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>