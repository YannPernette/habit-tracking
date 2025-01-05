<script setup lang="ts">
const title = ref('')
const description = ref('')

async function addHabit(event: Event) {
    event.preventDefault()

    await useAPI('/habits', {
        method: 'POST',
        body: { title: title.value, description: description.value }
    })

    $trigger('habit:created')
}
</script>


<template>
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
                <Button type="submit">Créer l'habitude !</Button>
            </div>
        </form>
    </div>
</template>