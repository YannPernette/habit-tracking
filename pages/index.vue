<script setup lang='ts'>
import type { SanityDocument } from "@sanity/client";

const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]`;

const { data: homepage } = await useSanityQuery<SanityDocument>(HOMEPAGE_QUERY);
</script>


<template>
    <div v-if="homepage" class="homepage">

        <!-- {{ homepage }} -->
        
        <Hero />

        <Functionalities v-bind="homepage.functionalities" />

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
    </div>
</template>


<style lang='scss'>
.homepage {
    margin-top: 150px;
}
</style>