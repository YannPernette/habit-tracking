<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument[]>(POSTS_QUERY);
</script>


<template>
<div class="accueil">
    page accueil
    <ul class="">
      <li v-for="post in posts" :key="post._id" class="">
        <nuxt-link :to="`/${post.slug.current}`">
          <h2 class="">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </nuxt-link>
      </li>
    </ul>
</div>
</template>


<style lang='scss'>
.accueil {
    margin-top: 100px;
}
</style>