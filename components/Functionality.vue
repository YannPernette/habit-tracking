<script setup lang="ts">
defineProps<{
    image: string,
    title: string,
    subtitle: string,
    text: string
}>();

const { urlFor } = useSanityImage()
</script>


<template>
    <img v-if="image" class="" :src="urlFor(image)?.url()" alt="">
    <h3 v-if="title">{{ title }}</h3>
    <p v-if="subtitle">{{ subtitle }}</p>
    <p v-if="text">{{ text }}</p>
</template>


<style lang='scss'></style>