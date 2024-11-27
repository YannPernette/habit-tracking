<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import DefaultLayout from '@/layouts/Default.vue';
import CardHabit from '@/components/CardHabit.vue';
</script>

<template>
  <DefaultLayout>

    <template #header>
      <Header />
    </template>

    <CardHabit />

    <template #footer>
      <Footer />
    </template>

  </DefaultLayout>
</template>
