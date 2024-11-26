<script setup lang="ts">
import LogoFull from './icon/LogoFull.vue';
import Button from './Button.vue';
</script>


<template>
  <header>
    <div class="header">
      <LogoFull class="header__logo" />
      <ul class="header__navigation">
        <li><RouterLink class="link header__link" to="#">Accueil</RouterLink></li>
        <li><RouterLink class="link header__link" to="#">Mes habitudes</RouterLink></li>
        <li><RouterLink class="link header__link" to="#">Mon résumé mensuel</RouterLink></li>
      </ul>
      <div>
        <Button>Se connecter</Button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 150px;
    height: auto;
  }

  &__navigation {
    display: flex;
    list-style: none;
  }

  &__link {
    font-size: $largetxt;
    &::after {
      content: none;
    }
  }
}
</style>
