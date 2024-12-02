<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import DefaultLayout from '@/layouts/Default.vue';
import LoginForm from '@/components/LoginForm.vue';
</script>


<template>
  <DefaultLayout>

    <template #header>
      <Header />
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
    background: linear-gradient(90deg, rgba(153,144,255,1) 0%, rgba(107,78,255,1) 74%);
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
