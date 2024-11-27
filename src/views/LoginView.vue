<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import DefaultLayout from '@/layouts/Default.vue';
import LoginForm from '@/components/LoginForm.vue';

// Déclare une référence réactive pour le header
const refHeader = ref();

onMounted(() => {
  const header = refHeader.value?.childRef;
  console.log(header?.offsetHeight)
  document.documentElement.style.setProperty('--header-height', `${header?.offsetHeight}px`);
});
</script>


<template>
  <DefaultLayout>

    <template #header>
      <Header ref="refHeader" />
    </template>

    <div class="login">
      <div class="login__background">
        <img class="login__backgroundImg"
          src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="">
      </div>

      <LoginForm />
    </div>

    <template #footer>
      <Footer />
    </template>

  </DefaultLayout>
</template>


<style lang="scss">
.login {
  position: relative;
}

.login__background {
  position: relative;
  width: 100vw;
  height: calc(100vh - var(--header-height));
  margin-block-start: var(--header-height);

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(128deg, rgba(153, 144, 255, 1) 20%, rgba(255, 255, 255, 1) 100%);
    opacity: 0.6;
    width: 100vw;
    height: calc(100vh - var(--header-height));
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
