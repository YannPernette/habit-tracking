<script setup lang="ts">
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Header from '@/components/Header.vue';
import DefaultLayout from '@/layouts/Default.vue';

</script>

<template>
  <DefaultLayout>

    <template #header>
      <Header />
    </template>

    <template #aside>
      <h1>Home</h1>
    </template>

    <template #footer>
      <h1>Home</h1>
    </template>

  </DefaultLayout>
</template>
