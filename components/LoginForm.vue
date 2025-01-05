<script setup lang="ts">
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

  await router.push('/login')
}
</script>


<template>
  <div class="loginForm">
    <h1 class="loginForm__title">Se connecter</h1>

    <form class="loginForm__form" @submit="onSubmit">
      <Input id="username" v-model="username" placeholder="testuser" type="text" />
      <Input id="password" v-model="password" placeholder="password123" type="password" />
      <Button type="submit">Se connecter</Button>
      <p>Pas encore de compte ? <NuxtLink class="link" to="/register">Inscrivez-vous</NuxtLink></p>
      <Button @click="logout">Se déconnecter</Button>
    </form>
  </div>
</template>


<style lang="scss">
.loginForm {
  width: 30%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255 255 255 / 14%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.31);
  padding: remTo(20px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__title {
    font-size: $title2;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;

    .bold {
      font-weight: bold;
    }
  }
}
</style>
