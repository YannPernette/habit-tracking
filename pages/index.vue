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
        
        <Hero />

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
    margin-top: 150px;
}
</style>