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
            <p>{{ name }}</p>
            <p>{{ work }}</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>


<style lang='scss'>
.testimony {
    display: flex;
}</style>