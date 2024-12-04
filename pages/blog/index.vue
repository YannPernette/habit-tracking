<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const filter = ref('')

const page = ref(1)
const perPage = 2

const paginationStart = computed(()=> {
  return (page.value - 1) * perPage
})

const paginationEnd = computed(()=> {
  return page.value * perPage
})


const POSTS_QUERY = groq`*[
  _type == "post"
  && defined(slug.current)
  && ($filterParam == "" || $filterParam in (categories[]->slug.current))
]|order(publishedAt desc)[$start...$end]{_id, title, "categories": categories[]->{ title, slug }, slug, image, publishedAt}`;

const CATEGORIES_QUERY = groq`*[
  _type == "category"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, slug}`;

const { data: posts } = await useSanityQuery<SanityDocument>(POSTS_QUERY, { filterParam: filter, start: paginationStart, end: paginationEnd });
const { data: categories } = await useSanityQuery<SanityDocument>(CATEGORIES_QUERY);

function onCategoryClick(category: SanityDocument) {
  filter.value = category.slug.current
}

function onPageClick(index: number) {
  page.value = index
}

const { projectId, dataset } = useSanity().client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
</script>


<template>
  <div class="accueil">
    <div>
      <p>Catégories</p>
      <ul>
        <li 
        v-for="(category, index) in categories" :key="index"
          :class="['cat', { 'active': filter === category.slug.current }]">
          <span @click="onCategoryClick(category)">{{ category.title }}</span>
        </li>
      </ul>
    </div>

    <ul class="liste">
      <li v-for="(post, index) in posts" :key="index" class="">
        <span v-for="(category, index2) in post.categories" :key="index2" class="tag">{{ category.title }}</span>
        <NuxtLink :to="`/blog/${post.slug.current}`">
          <h2 class="">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
          <img v-if="post.image" :src="urlFor(post.image)?.url()" alt="">
        </NuxtLink>
      </li>
    </ul>

    <ul class="pagination">
      <li v-for="n in 5" :key="n" @click="onPageClick(n)">
        Page {{ n }}
      </li>
    </ul>
  </div>
</template>


<style lang='scss'>
.accueil {
  margin-top: 100px;
  margin-inline: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  img {
    width: 100px;
    height: auto;
  }

  .liste {
    display: flex;
    gap: 100px;
  }

  .tag {
    text-decoration: none;
    background-color: $lightAccent;
    padding: 10px;
    border-radius: 5px;
    color: $black;
  }

  .cat {
    border-radius: 5px;
    width: fit-content;

    &.active {
      background-color: red;
    }
  }

  .pagination {
    display: flex;
    gap: 20px;
  }
}
</style>