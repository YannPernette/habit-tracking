<script setup lang='ts'>
defineProps<{
    slug: { current: string },
    title: string,
    publishedAt: Date,
    image: string,
    categories: { title: string }[],
}>();

const { urlFor } = useSanityImage()
</script>


<template>
    <NuxtLink :to="`/blog/${slug.current}`">
        <div class="post">
            <img v-if="image" class="post__image" :src="urlFor(image)?.url()" alt="">
            <ul class="post__tags">
                <li v-for="(category, index2) in categories" :key="index2" class="post__tag">
                    <span>{{ category.title }}</span>
                </li>
            </ul>
            <h2 class="post__title">{{ title }}</h2>
            <p class="post__published">{{ new Date(publishedAt).toLocaleDateString('fr-FR') }}</p>
            <Button class="post__btn">Lire l'article</Button>
        </div>
    </NuxtLink>
</template>


<style lang='scss'>
a:has(.post) {
    text-decoration: none;
    width: fit-content;
    display: block;
}

.post {
    width: 25rem;
    border: 2px solid $gray800;
    border-radius: remTo(25px);
    background-color: $light;
    padding: 1rem;
    color: $black;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    transform: all .5s ease;

    &:hover {
        border: 2px solid $primary;
    }

    &__image {
        width: 100%;
        height: 15rem;
        object-fit: cover;
        border-radius: remTo(20px);
    }

    &__tags {
        display: flex;
        gap: remTo(5px);
        margin-left: remTo(10px);
        margin-top: remTo(5px);
    }

    &__tag {
        font-weight: 300;

        &:not(:last-child)::after {
            content: " -";
        }
    }

    &__title {
        font-size: $title3;
        margin-block: remTo(10px);
    }

    &__published {
        margin-top: 0;
    }

    &__btn {
        justify-self: self-end;
    }

}
</style>