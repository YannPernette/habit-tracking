<script setup lang='ts'>
defineProps<{
    title: string,
    text: string,
    elements: { image: string, title: string, subtitle: string, text: string }[]
}>();
</script>


<template>
    <section class="functionalities mx-page">
        <h2 v-if="title" class="functionalities__title">{{ title }}</h2>
        <p v-if="text" class="functionalities__text">{{ text }}</p>
        <ul v-if="elements" class="functionalities__list">
            <li v-for="(element, index) in elements" :key="index">
                <Functionality v-bind="element" />
            </li>
        </ul>
    </section>
</template>


<style lang='scss'>
.functionalities {
    text-align: center;
    margin-block-start: remTo(120px);

    &__title {
        font-family: 'Merriweather', serif;
        font-weight: bolder;
    }

    &__text {
        margin-inline: 20%;
        font-size: $largetxt;
        margin-block-end: remTo(50px);
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: remTo(100px);
    }
}
</style>