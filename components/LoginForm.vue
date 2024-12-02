<script setup lang="ts">
import Input from './Input.vue';
import Google from './icon/Google.vue';
</script>


<template>
  <div class="loginForm">
    <h1 class="loginForm__title">Se connecter</h1>

    <form class="loginForm__form" action="">
      <div class="loginForm__inputs">
        <Input class="input -transparent" placeholder="test@mail.com" type="email" />
        <Input class="input -transparent" placeholder="password123" type="password" />
      </div>
      <input class="button" type="submit" value="Se connecter" />
    </form>

    <div class="loginForm__loginSection">
      <p class="loginForm__noAccount">Pas encore de compte ? <a class="link" href="">Inscrivez-vous</a></p>
      <p class="loginForm__or">OU</p>
      <a class="loginForm__btngoogle" href="/login.html">
        <Google />Se connecter avec Google
      </a>
    </div>
  </div>
</template>


<style lang="scss">
.loginForm {
  width: 70%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(255 255 255 / 14%);
  border-radius: remTo(8px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.625);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include medium-up {
    width: 50%;
  }
  @include large-up {
    width: 30%;
  }

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

  &__inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: remTo(20px);
    margin-block-end: remTo(20px);
  }

  &__loginSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: remTo(10px);
  }

  &__noAccount {
    margin: 0;
  }

  &__or {
    margin: 0;
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
