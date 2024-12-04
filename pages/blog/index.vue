<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, "categories": categories[]->{ title, slug }, slug, image, publishedAt}`;

const { data: posts } = await useSanityQuery<SanityDocument>(POSTS_QUERY);

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
</script>


<template>
<div class="accueil">
  
    <ul class="">
      <li v-for="(post, index) in posts" :key="index" class="">
        <span v-for="(category, index2) in post.categories" :key="index2" class="tag">{{ category.title }}</span>
        <NuxtLink :to="`/blog/${post.slug.current}`">
          <h2 class="">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
          <img v-if="post.image" :src="urlFor(post.image)?.url()" alt="">
        </NuxtLink>
      </li>
    </ul>
</div>
</template>


<style lang='scss'>
.accueil {
    margin-top: 100px;

    img {
        width: 100px;
        height: auto;
    }

    .tag {
      text-decoration: none;
      background-color: $lightAccent;
      padding: 10px;
      border-radius: 5px;
      color: $black;
    }
}
</style>