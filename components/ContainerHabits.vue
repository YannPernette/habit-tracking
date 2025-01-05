<script setup lang="ts">
import type { DashboardPayload } from '~/@types/dashboard';

defineProps<{
  whichHabits: 'globalHabits' | 'personalHabits';
}>();

const { data, refresh } = await useAsyncData<DashboardPayload>('dashboard', async () =>
  await useAPI('/dashboard', {
    method: 'GET'
  })
)

function refreshHabits() {
  refresh()
}

onMounted(() => {
  $on('habit:created', refreshHabits)
  $on('habit:deleted', refreshHabits)
  $on('habit:edited', refreshHabits)
})

onBeforeUnmount(() => {
  $off('habit:created', refreshHabits)
  $off('habit:deleted', refreshHabits)
  $off('habit:edited', refreshHabits)
})
</script>


<template>
  <ul v-if="data" class="containerHabits">
    <li v-for="(habit, index) in data[whichHabits]" :key="index">
      <CardHabit v-bind="habit" />
    </li>
  </ul>
</template>


<style lang="scss">
.containerHabits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: remTo(30px);
}
</style>
