<script setup lang='ts'>
const { id } = useRoute().params;

const completed = ref()
const date = ref()

const { data, refresh } = await useAsyncData('habit', async () =>
    await useAPI(`/tracking/${id}/history`, {
        method: 'GET'
    })
)

async function completeHabit(event: Event) {
    event.preventDefault()

    await useAPI(`/tracking/${id}`, {
        method: 'POST',
        body: { completed: completed.value, date: date.value }
    })

    refresh()
    // emit('habit:created')
    // $trigger('habit:created')
}
</script>


<template>
<div style="margin-top: 100px;">
    <h1>{{ data.habit.title }}</h1>
    <p>{{ data.habit.description }}</p>

    <h2>Historique</h2>
    <ul>
        <li v-for="(tracking, index) in data.trackings" :key="index">
            {{ tracking.date }}
        </li>
    </ul>

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