<script setup lang='ts'>
defineProps<{
    slug: { current: string },
    title: string,
    publishedAt: Date,
    image: string,
    categories: { title: string }[],
}>();

const { urlFor } = useSanityImage()
</script>


<template>
    <div>
        <NuxtLink :to="`/blog/${slug.current}`">
            <h2 class="">{{ title }}</h2>
            <p>{{ new Date(publishedAt).toLocaleDateString('fr-FR') }}</p>
            <img v-if="image" :src="urlFor(image)?.url()" alt="">
            <span v-for="(category, index2) in categories" :key="index2" class="tag">{{ category.title }}</span>
        </NuxtLink>
    </div>
</template>


<style lang='scss'></style>