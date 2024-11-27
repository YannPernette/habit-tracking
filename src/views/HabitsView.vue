<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import DefaultLayout from '@/layouts/Default.vue';
import ContainerHabits from '@/components/ContainerHabits.vue';
</script>

<template>
  <DefaultLayout>

    <template #header>
      <Header />
    </template>

    <ContainerHabits />

    <template #footer>
      <Footer />
    </template>

  </DefaultLayout>
</template>
