<script setup lang="ts">
const title = ref('')
const description = ref('')

const emit = defineEmits(['habit:created'])

async function addHabit(event: Event) {
    event.preventDefault()

    await fetch('http://localhost:4000/habits', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${useCookie('api_tracking_jwt').value}`,
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title.value,
            description: description.value
        }),
    })

    emit('habit:created')
}
</script>


<template>
    <!-- <ContainerHabits /> -->
    <div>
        <form @submit="addHabit">
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
        </form>
    </div>
</template>