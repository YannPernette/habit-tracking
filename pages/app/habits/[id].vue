<script setup lang='ts'>
const { id } = useRoute().params;

const completed = ref()
const date = ref()

const { data } = await useAsyncData('habit', async () =>
    await useAPI(`/habits/${id}`, {
        method: 'GET'
    })
)

async function completeHabit(event: Event) {
    event.preventDefault()

    await useAPI(`/tracking/${id}`, {
        method: 'POST',
        body: { completed: completed.value, date: date.value }
    })

    // emit('habit:created')
    // $trigger('habit:created')
}
</script>


<template>
<div style="margin-top: 100px;">
    uoi
    <h1>{{ data.title }}</h1>
    {{ completed }} {{ date }}

    <div>
        <form @submit="completeHabit($event)">
            <div>
                <label for="newTitle">Complétée</label>
                <input id="newTitle" v-model="completed" type="checkbox" required>
            </div>
            <div>
                <label for="newDescription">Date</label>
                <input id="newDescription" v-model="date" type="date" required>
            </div>
            <div>
                <button type="submit">ENVOYER</button>
            </div>
        </form>
    </div>
</div>
</template>


<style lang='scss'>

</style>