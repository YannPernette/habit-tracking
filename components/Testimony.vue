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
            <p v-if="name" class="testimony__name">{{ name }}</p>
            <p v-if="work" class="testimony__work">{{ work }}</p>
            <p v-if="text">{{ text }}</p>
        </div>
    </div>
</template>


<style lang='scss'>
.testimony {
    display: flex;
    align-items: center;
    gap: remTo(30px);

    &__image {
        border-radius: 100000px;
        width: 40rem;
        height: 10rem;
        object-fit: cover;
    }

    p {
        margin: 0;
    }

    &__name {
        font-weight: 500;
        font-size: remTo(20px);
    }

    &__work {
        font-style: italic;
        margin-bottom: remTo(10px) !important;
    }
}
</style>