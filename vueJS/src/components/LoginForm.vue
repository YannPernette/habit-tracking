<script setup lang="ts">
import Input from './Input.vue';
import Google from './icon/Google.vue';
</script>


<template>
  <div class="loginForm">
    <h1 class="loginForm__title">Se connecter</h1>
    <form class="loginForm__form" action="">
      <Input class="input" placeholder="test@mail.com" type="email" />
      <Input class="input" placeholder="password123" type="password" />
      <a class="button" href="/login.html">Se connecter</a>
      <p>Pas encore de compte ? <a class="link" href="">Inscrivez-vous</a></p>
      <p>OU</p>
      <a class="loginForm__btngoogle" href="/login.html"><Google />Se connecter avec Google</a>
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
  padding: 20px;

  &__title {
    font-size: $title2;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .bold {
      font-weight: bold;
    }
  }

  &__btngoogle {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid $black;
    background-color: $light;
    text-decoration: none;
    color: $black;
    justify-content: center;
    padding-block: 7px;
    border-radius: 100px;
    transition: all .2s ease-in-out;

    &:hover {
      background-color: #f3f3f3;
    }
  }
}
</style>
