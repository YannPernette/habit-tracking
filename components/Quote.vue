<script setup lang='ts'>
defineProps<{
    quote?: string,
}>();
</script>


<template>
<div class="quote">
    <blockquote class="quote__text">"{{ quote }}"</blockquote>
</div>
</template>


<style lang='scss'>
.quote {
    margin-block-start: remTo(70px);
    background-color: $lightAccent;
    padding-block: remTo(20px);
    clip-path: polygon(5% 0, 100% 0%, 97% 100%, 0% 100%);

    &__text {
        text-align: center;
        font-family: 'Merriweather', serif;
        font-size: remTo(30px);
    }
}
</style>