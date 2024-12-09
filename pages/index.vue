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

        <Quote v-bind="homepage" />
    </div>
</template>


<style lang='scss'>
.homepage {
    margin-top: 150px;
}
</style>