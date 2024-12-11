<script setup lang='ts'>
const username = ref('')
const password = ref('')

const router = useRouter()

async function onSubmit(event: Event) {
  event.preventDefault()

  try {
    const data = await useAPI('/auth/login', {
      method: 'POST',
      body: { username: username.value, password: password.value },
      auth: false
    })

    const cookieJwt = useCookie('api_tracking_jwt')
    cookieJwt.value = data.token

    await router.push('/app/dashboard')

  } catch (error: unknown) {
    if (error instanceof Error && 'response' in error) {
      const apiError = error as { response: { statusText: string } };
      throw new Error(`Erreur : ${apiError.response.statusText}`);
    } else {
      throw new Error('Erreur : Une erreur inattendue est survenue');
    }
  }
}

async function logout() {
  const cookieJwt = useCookie('api_tracking_jwt')
  cookieJwt.value = ''

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

    <div>
      <button @click="logout">SE DECONNECTER</button>
    </div>

    <div class="login__background">
      <img 
        class="login__backgroundImg"
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