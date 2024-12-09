<script setup lang='ts'>
import type { SanityDocument } from "@sanity/client";

const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{...,"testimonies": testimonies[]->{ ... }}`;

const { data: homepage } = await useSanityQuery<SanityDocument>(HOMEPAGE_QUERY);
</script>


<template>
    <div v-if="homepage" class="homepage">

        <!-- {{ homepage.testimonies }} -->

        <Hero />

        <Functionalities v-bind="homepage.functionalities" />

<<<<<<< Updated upstream
        <!-- <section class="homepage__functionalities">
            <div class="">
                <h2 v-if="homepage.functionalities.title">{{ homepage.functionalities.title }}</h2>
                <p v-if="homepage.functionalities.text">{{ homepage.functionalities.text }}</p>
            </div>
            <ul v-if="homepage.functionalities.elements" class="">
                <li v-for="(element, index) in homepage.functionalities.elements" :key="index">
                    <Functionality v-bind="element" />
                </li>
            </ul>
        </section> -->
=======
        <Quote v-bind="homepage" />

        <ul>
            <li v-for="(testimony, index) in homepage.testimonies" :key="index">
                <Testimony v-bind="testimony" />
            </li>
        </ul>
>>>>>>> Stashed changes
    </div>
</template>


<style lang='scss'>
.homepage {
    margin-top: 150px;
}
</style>