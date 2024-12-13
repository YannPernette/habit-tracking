<script setup lang='ts'>
defineProps<{
    profilePicture: string,
    name: string,
    work: string,
    text: string
}>();

const { urlFor } = useSanityImage()
</script>


<template>
    <div class="testimony">
        <div>
            <img v-if="profilePicture" class="testimony__image" :src="urlFor(profilePicture)?.url()" alt="">
        </div>
        <div>
            <p v-if="name">{{ name }}</p>
            <p v-if="work">{{ work }}</p>
            <p v-if="text">{{ text }}</p>
        </div>
    </div>
</template>


<style lang='scss'>
.testimony {
    display: flex;

    &__image {
        border-radius: 100000px;
        width: 10rem;
        height: 10rem;
        object-fit: cover;
    }
}
</style>