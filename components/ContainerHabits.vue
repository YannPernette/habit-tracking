<script setup lang="ts">
</script>


<template>
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
