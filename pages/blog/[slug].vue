<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const route = useRoute()

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: route.params.slug })

if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Le post est introuvable'})
}

const { urlFor } = useSanityImage()

useSeoMeta({
  title: '${post.value.title} | Tracking App',
  description: 'Retrouvez nos dernières informations et notre actualité sur Habits.com !',
  ogTitle: post.value.title,
  ogDescription: 'Ce site est un site informatif', 
  ogImage: post.value.image && urlFor(post.value.image)?.url() ?
  urlFor(post.value.image)?.url() : '/meta-default.png',
})
</script>


<template>
    <div class="singlePost">
        <div v-if="post">
            <img class="singlePost__image" :src="urlFor(post.image)?.url()" alt="">
            <div class="mx-page">
                <h1 class="singlePost__title">{{ post.title }}</h1>
            <SanityContent :blocks="post.body" />
            <Button is-nuxt-link to="/blog" class="singlePost__link">&larr; Retour aux posts</Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.singlePost {
    margin-top: remTo(85px);
    
    &__image {
        width: 100vw;
        height: 40vh;
        object-fit: cover;
    }

    &__title {
        margin-block: remTo(20px);
    }

    &__link {
        width: fit-content;
        margin-block: remTo(50px);
    }
}
</style>