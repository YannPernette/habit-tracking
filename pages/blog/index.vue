<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";

const filter = ref('')
const page = ref(1)
const perPage = 2

const paginationStart = computed(() => {
  return (page.value - 1) * perPage
})

const paginationEnd = computed(() => {
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

const COUNT_TITLES_QUERY = groq`
  count(*[
    _type == "post"
    && ($filterParam == "" || $filterParam in (categories[]->slug.current))
  ])
`;

const { data: posts } = await useSanityQuery<SanityDocument>(POSTS_QUERY, { filterParam: filter, start: paginationStart, end: paginationEnd });
const { data: categories } = await useSanityQuery<SanityDocument>(CATEGORIES_QUERY);
const { data: postCount } = await useSanityQuery<number>(COUNT_TITLES_QUERY, { filterParam: filter });

function onCategoryClick(category: SanityDocument) {
  if (filter.value == category.slug.current) {
    filter.value = ''
  } else {
    filter.value = category.slug.current
    page.value = 1
  }
}

function onPageClick(index: number) {
  page.value = index
}

useSeoMeta({
  title: 'Blog - Loopy.com',
  ogTitle: 'Blog',
  description: 'Retrouvez nos dernières informations et notre actualité sur Loopy.com !',
  ogDescription: 'Ce site est un site informatif',
})
</script>


<template>
  <div class="blog mx-page">
    <ul v-if="categories" class="blog__categories">
      <li 
        v-for="(category, index) in categories" :key="index"
        :class="['blog__category', { '-active': filter === category.slug.current }]" @click="onCategoryClick(category)">
        <span>{{ category.title }}</span>
      </li>
    </ul>

    <ul v-if="posts && posts.length" class="blog__posts">
      <li v-for="(post, index) in posts" :key="index">
        <CardBlog v-bind="post" />
      </li>
    </ul>
    <div v-else>
      <p>Aucun post ne correspond à cette catégorie</p>
    </div>

    <ul class="blog__pagination">
      <li 
        v-for="n in postCount / perPage" :key="n"
        :class="['blog__page', { '-active': page === n }]" @click="onPageClick(n)">
        <span>Page {{ n }}</span>
      </li>
    </ul>
  </div>
</template>


<style lang='scss'>
.blog {
  margin-top: remTo(140px);
  margin-bottom: remTo(80px);

  &__categories {
    display: flex;
    justify-content: center;
    gap: remTo(20px);
  }

  &__category {
    border-radius: remTo(20px);
    border: 2px solid $primary;
    font-size: $largetxt;
    padding: remTo(8px) remTo(20px);
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      background-color: $primary;
      color: $light;
    }

    &.-active {
      background-color: $primary;
      color: $light;
    }
  }

  &__posts {
    display: flex;
    flex-wrap: wrap;
    gap: remTo(50px);
    justify-content: center;
    align-items: stretch;
    margin-block: remTo(50px);
  }

  &__pagination {
    display: flex;
    justify-content: center;
    gap: remTo(30px);
  }

  &__page {
    text-transform: uppercase;
    font-size: $largetxt;
    font-weight: 500;
    transition: all .2s ease;

    &.-active {
      color: $primary;
    }

    &:not(.-active) {
      cursor: pointer;

      &:hover {
        color: $darkAccent;
      }
    }
  }
}
</style>