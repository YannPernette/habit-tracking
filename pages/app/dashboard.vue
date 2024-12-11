<script setup lang="ts">
</script>


<template>
    <div class="mx-page" style="margin-top: 100px;">
        <ContainerHabits which-habits="globalHabits" />
        <ContainerHabits which-habits="personalHabits" />

        <FormAddHabit />
    </div>

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
</template>