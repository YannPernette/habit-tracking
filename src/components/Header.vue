<script setup lang="ts">
import LogoFull from './icon/LogoFull.vue';
import Button from './Button.vue';
</script>


<template>
  <header>
    <div class="header">
      <LogoFull class="header__logo" />
      <ul class="header_navigation">
        <li><RouterLink to="#">Accueil</RouterLink></li>
        <li><RouterLink to="#">Mes habitudes</RouterLink></li>
        <li><RouterLink to="#">Mon résumé mensuel</RouterLink></li>
      </ul>
      <Button>Se connecter</Button>
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
    width: 200px;
    height: auto;
  }

  &__navigation {
    display: flex;
  }
}
</style>
