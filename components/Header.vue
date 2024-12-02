<script setup lang="ts">
</script>


<template>
    <div class="header">
      <NuxtLink to="/" class="header__homelink">
        <LogoFull class="header__logo" />
      </NuxtLink>

      <ul class="header__navigation">
        <li class="header__navigationitem">
          <NuxtLink class="link header__link" to="#">Accueil</NuxtLink>
        </li>
        <li class="header__navigationitem">
          <NuxtLink class="link header__link" to="/habits">Mes habitudes</NuxtLink>
        </li>
        <li class="header__navigationitem">
          <NuxtLink class="link header__link" to="#">Mon résumé mensuel</NuxtLink>
        </li>
      </ul>

      <div class="header__login">
        <Button is-router-link to="/login" class="header__btnlogin">Se connecter</Button>
        <Button class="header__btnregister -outline">S'inscrire</Button>
      </div>
    </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-inline: remTo(30px);
  background-color: $light;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  z-index: 100;

  &__homelink {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: remTo(120px);
    height: auto;
    transition: all .5s ease;

    &:hover {
      transform: rotateY(45deg);
    }
  }

  &__navigation {
    display: flex;
    list-style: none;
    gap: remTo(50px);
    margin: 0;
  }

  &__navigationitem {
    display: flex;
    align-items: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      background-color: $primary;
      transition: all .2s ease-in-out;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  &__link {
    color: $black;
    font-size: $largetxt;

    &::after {
      content: none;
    }
  }

  &__login {
    padding-inline: remTo(70px);
    padding-block: remTo(15px);
    background: linear-gradient(90deg, rgba(153,144,255,1) 0%, rgba(107,78,255,1) 74%);
    display: flex;
    gap: remTo(20px);
    justify-content: flex-end;
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
  }

  &__btnlogin {
    color: $black;
    background-color: $light;
    border-color: $light;

    &:hover {
      background-color: $gray100;
      border-color: $gray100;
    }
  }

  &__btnregister {
    color: $light !important;
    border-color: $light;

    &:hover {
      color: $black !important;
      background-color: $gray100;
      border-color: $gray100;
    }
  }
}
</style>
