<script setup lang="ts">
</script>


<template>
  <div class="footer">
    <Logo class="footer__logo" />

    <ul class="footer__navigation">
      <li>
        <NuxtLink class="link footer__link" to="#">Accueil</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link footer__link" to="#">Mes habitudes</NuxtLink>
      </li>
      <li>
        <NuxtLink class="link footer__link" to="#">Mon résumé mensuel</NuxtLink>
      </li>
    </ul>

    <p class="footer__tagline">© 2024 Loopy Inc. Tous droits réservés</p>
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $light;
  padding-block: remTo(20px);

  &__logo {
    width: 70px;
    height: auto;
    transition: all .5s ease;

    &:hover {
      transform: rotateY(180deg);
    }
  }

  &__navigation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    gap: remTo(30px);
    padding-block-end: remTo(40px);
    margin-block: remTo(20px);
    position: relative;
    text-align: center;

    @include medium-up {
      flex-direction: row;
      gap: remTo(50px);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 1px;
      background-color: $gray400;
    }
  }

  &__link {
    color: $gray800;
    font-size: $largetxt;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .3s ease-in-out;

    &:hover {
      color: $black;
    }

    &::after {
      content: none;
    }
  }

  &__tagline {
    color: $gray800;
  }
}
</style>
