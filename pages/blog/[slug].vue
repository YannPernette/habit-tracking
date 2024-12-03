<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
const route = useRoute()

const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, { slug: route.params.slug })

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;
</script>


<template>
    <div class="blog">
        <a href="/blog" class="link">&larr; Back to posts</a>

        <div v-if="post" >
            <h1>{{ post.title }}</h1>
            <SanityContent :blocks="post.body" />
            <img :src="urlFor(post.image)?.url()" alt="">
            <!-- <SanityImage :asset-id="post.image.asset._ref" /> -->
        </div>
    </div>
</template>

<style lang="scss">
.blog {
    margin-top: 100px;
}
</style>