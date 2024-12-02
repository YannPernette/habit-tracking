<script setup lang="ts">
import CardHabit from './CardHabit.vue';
</script>


<template>
  <div class="containerHabits">
    <h1>Mes Habitudes</h1>
    <ul class="containerHabits__habitsList">
      <li>
        <CardHabit />
      </li>
      <li>
        <CardHabit />
      </li>
      <li>
        <CardHabit />
      </li>
      <li>
        <CardHabit />
      </li>
      <li>
        <CardHabit />
      </li>
    </ul>
  </div>
</template>


<style lang="scss">
.containerHabits {
  margin-top: 100px;
  margin-left: 20px;
  padding: remTo(50px);
  border-radius: remTo(8px);
  background: linear-gradient(90deg, rgba(153, 144, 255, 1) 0%, rgba(107, 78, 255, 1) 74%);
  width: fit-content;

  &__habitsList {
    display: flex;
    flex-direction: column;
    gap: remTo(20px);
  }
}
</style>
