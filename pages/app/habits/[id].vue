<script setup lang='ts'>
const { id } = useRoute().params;

const { data } = await useAsyncData('habit', async () =>
    await useAPI(`/habits/${id}`, {
        method: 'GET'
    })
)
</script>


<template>
<div style="margin-top: 100px;">
    uoi
    <h1>{{ data.title }}</h1>
</div>
</template>


<style lang='scss'>

</style>