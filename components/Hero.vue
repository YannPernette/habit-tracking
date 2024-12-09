<script setup lang='ts'>
import type { SanityDocument } from "@sanity/client";

const HERO_QUERY = groq`*[_type == "homepage"][0]{
  hero {
    title,
    introduction,
    button {title, link},
    image
  }
}`;

const { data: homepage } = await useSanityQuery<SanityDocument>(HERO_QUERY);

const { urlFor } = useSanityImage()
</script>


<template>
    <section v-if="homepage" class="hero mx-page">
        <div class="hero__contenu">
            <h1 v-if="homepage.hero.title">{{ homepage.hero.title }}</h1>
            <p v-if="homepage.hero.introduction">{{ homepage.hero.introduction }}</p>
            <Button v-if="homepage.hero.button" is-nuxt-link :to="`/${homepage.hero.button.link}`">{{
                homepage.hero.button.title }}</Button>
        </div>

        <div class="hero__mockup">
            <img v-if="homepage.hero.image" class="hero__image" :src="urlFor(homepage.hero.image)?.url()" alt="">
        </div>
    </section>
</template>


<style lang='scss'>
.hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;

    &__image {
        width: remTo(300px);
    }
}
</style>