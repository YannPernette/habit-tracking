<script setup lang='ts'>
const currentDate = new Date();
const selectedMonth = ref(currentDate.getMonth().toString() + 1); // Mois actuel (1-12)
const selectedYear = ref(currentDate.getFullYear()); // Année actuelle

const { data, refresh } = await useAsyncData('tracking', async () =>
    await useAPI(`/reports/monthly?month=${selectedMonth.value}&year=${selectedYear.value}`, {
        method: 'GET'
    })
)

watch([selectedMonth, selectedYear], () => {
  refresh();
});
</script>


<template>
    <div style="margin-top: 140px;">
        <div>
            <label for="month-select">Mois</label>
            <select id="month-select" v-model="selectedMonth">
                <option v-for="month in 12" :key="month" :value="month.toString().padStart(2, '0')">
                    {{ new Date(0, month - 1).toLocaleString("fr-FR", { month: "long" }) }}
                </option>
            </select>

            <label for="year-select">Année</label>
            <select id="year-select" v-model="selectedYear">
                <option v-for="year in [2022, 2023, 2024, 2025]" :key="year" :value="year">
                    {{ year }}
                </option>
            </select>
        </div>

        <ul>
            <li v-for="(habit, index) in data.results" :key="index">
                {{ habit.title }}
                <p>Jours totaux : {{ habit.total_days }}</p>
                <p>Taux de complétion</p>
                <div class="tracking__completion" :style="{ width: habit.success_rate + '%' }" />
                <p>{{ habit.success_rate }} %</p>
                <p>Soit {{ habit.completed_days }} jours</p>
            </li>
        </ul>
    </div>
</template>


<style lang='scss'>
.tracking {
    &__completion {
        background-color: $primary;
        height: 2rem;
        width: 0;
    }
}
</style>