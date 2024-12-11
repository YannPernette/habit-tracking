<script setup lang="ts">
const { data, refresh } = await useAsyncData('dashboard', async () =>
    await useAPI('/dashboard', {
        method: 'GET'
    })
)

function onHabitCreated() {
    console.log('Habitude créée avec succès')
    refresh()
}

onMounted(() => {
    $on('habit:created', onHabitCreated)
})

onBeforeUnmount(() => {
    $off('habit:created', onHabitCreated)
})
</script>


<template>
    <!-- <ContainerHabits /> -->
    <div style="margin-top: 100px;">
        <!-- {{ data }} -->
        <br><br>
        <ul>
            <li v-for="(habit, index) in data.globalHabits" :key="index">
                <CardHabit v-bind="habit" />
            </li>
        </ul>
        <br><br>
        <ul>
            <li v-for="(habit, index) in data.personalHabits" :key="index">
                <CardHabit v-bind="habit" />
            </li>
        </ul>
        <br><br>

        <FormAddHabit @habit:created="onHabitCreated" />

        <!-- <form @submit="deleteHabit">
            <div>
                <label for="title">Titre</label>
                <input id="title" v-model="title" type="title">
            </div>
            <div>
                <label for="description">Description</label>
                <input id="description" v-model="description" type="description">
            </div>
            <div>
                <button type="submit">ENVOYER</button>
            </div>
        </form> -->
    </div>
</template>