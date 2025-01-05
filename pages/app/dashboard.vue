<script setup lang="ts">
</script>


<template>
    <div class="container-habits mx-page">
        <h1>Toutes les habitudes</h1>

        <h2>Habitudes de la communauté</h2>
        <ContainerHabits which-habits="globalHabits" class="container-habits__global" />

        <h2>Vos habitudes</h2>
        <ContainerHabits which-habits="personalHabits" />

        <h2>Ajouter une habitude</h2>
        <FormAddHabit />
    </div>
</template>


<style lang="scss">
.container-habits {
    margin-top: remTo(140px);

    &__global {
        margin-bottom: remTo(50px);
    }
}
</style>