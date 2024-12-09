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
    <div class="functionality">
        <img v-if="image" class="functionality__image" :src="urlFor(image)?.url()" alt="">
        <h3 v-if="title" class="functionality__title">{{ title }}</h3>
        <p v-if="subtitle" class="functionality__subtitle">{{ subtitle }}</p>
        <p v-if="text">{{ text }}</p>
    </div>
</template>


<style lang='scss'>
.functionality {
    &__image {
        width: 50px;
    }

    &__title {
        font-family: 'Merriweather', serif;
        margin-block-end: 0;
    }

    &__subtitle {
        margin-block-start: remTo(5px);
        font-style: italic;
    }

}
</style>