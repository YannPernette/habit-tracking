<script setup lang="ts">
const { data, refresh } = await useAsyncData('dashboard', async () => {
    const response: Response = await fetch('http://localhost:4000/dashboard', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${useCookie('api_tracking_jwt').value}` // Envoi du JWT
        }
    })

    return await response.json()
})

function onHabitCreated() {
    console.log('oui')
    refresh()
}
</script>


<template>
    <!-- <ContainerHabits /> -->
    <div style="margin-top: 100px;">
        {{ data }}
        <br><br>
        <ul>
            <li v-for="(habit, index) in data.globalHabits" :key="index">
                {{ habit.title }} : {{ habit.description }}
            </li>
        </ul>
        <br><br>
        <ul>
            <li v-for="(habit, index) in data.personalHabits" :key="index">
                {{ habit.title }} : {{ habit.description }}
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