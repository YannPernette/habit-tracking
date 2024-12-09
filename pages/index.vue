<script setup lang='ts'>
import type { SanityDocument } from "@sanity/client";

const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
  _id,
  hero {
    title,
    introduction,
    button {title, link},
    image
  },
  functionalities {
    title,
    text,
    elements[] {
      image,
      title,
      subtitle,
      text
    }
  }
}`;

const { data: homepage } = await useSanityQuery<SanityDocument>(HOMEPAGE_QUERY);

const { urlFor } = useSanityImage()
</script>


<template>
    <div v-if="homepage" class="homepage">
        <section class="homepage__hero">
            <div class="homepage__FirstPart">
                <h1 v-if="homepage.hero.title">{{ homepage.hero.title }}</h1>
                <p v-if="homepage.hero.introduction">{{ homepage.hero.introduction }}</p>
                <NuxtLink v-if="homepage.hero.button" :to="`/${homepage.hero.button.link}`">{{
                    homepage.hero.button.title }}</NuxtLink>
            </div>

            <div class="homepage__SecondPart">
                <img v-if="homepage.hero.image" class="homepage__mockup" :src="urlFor(homepage.hero.image)?.url()"
                    alt="">
            </div>
        </section>

        <section class="homepage__functionalities">
            <div class="">
                <h2 v-if="homepage.functionalities.title">{{ homepage.functionalities.title }}</h2>
                <p v-if="homepage.functionalities.text">{{ homepage.functionalities.text }}</p>
            </div>
            <ul v-if="homepage.functionalities.elements" class="">
                <li v-for="(element, index) in homepage.functionalities.elements" :key="index">
                    <img v-if="element.image" class="" :src="urlFor(element.image)?.url()" alt="">
                    <h3 v-if="element.title">{{ element.title }}</h3>
                    <p v-if="element.subtitle">{{ element.subtitle }}</p>
                    <p v-if="element.text">{{ element.text }}</p>
                </li>
            </ul>
        </section>
    </div>
</template>


<style lang='scss'>
.homepage {
    margin-top: 100px;

    &__hero {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    &__firstPart {}

    &__mockup {
        width: 200px;
    }
}
</style>