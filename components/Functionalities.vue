<script setup lang='ts'>
defineProps<{
    title: string,
    text: string,
    elements: {image: string, title: string, subtitle: string, text: string} []
}>();
</script>


<template>
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
    <ul v-if="elements" class="">
        <li v-for="(element, index) in elements" :key="index">
            <Functionality v-bind="element" />
        </li>
    </ul>
</template>


<style lang='scss'></style>