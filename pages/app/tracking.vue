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
    <div class="tracking mx-page" style="margin-top: 140px;">

        <h1>Tracking global de toutes vos activités par mois et année</h1>

        <div class="tracking__date">
            <div class="tracking__option">
                <label for="month-select">Mois</label>
                <select id="month-select" v-model="selectedMonth" class="tracking__input">
                    <option v-for="month in 12" :key="month" :value="month.toString().padStart(2, '0')">
                        {{ new Date(0, month - 1).toLocaleString("fr-FR", { month: "long" }) }}
                    </option>
                </select>
            </div>

            <div class="tracking__option">
                <label for="year-select">Année</label>
                <select id="year-select" v-model="selectedYear" class="tracking__input">
                    <option v-for="year in [2022, 2023, 2024, 2025]" :key="year" :value="year">
                        {{ year }}
                    </option>
                </select>
            </div>
        </div>

        <h2>Vos habitudes :</h2>

        <ul>
            <li v-for="(habit, index) in data.results" :key="index" class="tracking__habits">
                <div>
                    <h3>{{ habit.title }}</h3>
                    <p>Jours totaux : {{ habit.total_days }}</p>
                    <p class="tracking__taux">Taux de complétion</p>
                    <div class="tracking__progressbar">
                        <div class="tracking__containerCompletion">
                            <div class="tracking__completion" :style="{ width: habit.success_rate + '%' }" />
                        </div>
                        <p>{{ habit.success_rate }} %</p>
                    </div>
                    <p class="tracking__equivalence">Soit {{ habit.completed_days }} jours</p>
                </div>
            </li>
        </ul>
    </div>
</template>


<style lang='scss'>
.tracking {
    &__date {
        display: flex;
        justify-content: center;
        gap: remTo(30px);
        margin-top: remTo(40px);
    }

    &__option {
        font-size: $title3;
    }

    &__input {
        margin-left: remTo(10px);
        border-radius: remTo(5px);
        border: 1px solid $primary;
        padding: remTo(5px);

        &:focus {
            outline: 1px $primary;
        }
    }

    &__habits {
        position: relative;
        margin-bottom: 4rem;

        &:not(:last-child)::after {
            content: "";
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: remTo(-30px);
            background-color: $primary;
        }
    }

    &__taux {
        margin-bottom: 0;
    }

    &__progressbar {
        display: flex;
        gap: remTo(20px);
        align-items: center;
    }

    &__containerCompletion {
        width: 40%;
        border: 1px solid $black;
        border-radius: remTo(5px);
        overflow: hidden;
        height: fit-content;
    }

    &__completion {
        background-color: $primary;
        height: 2rem;
        width: 0;
    }

    &__equivalence {
        font-size: $smalltxt;
        margin: 0;
        color: $gray800;
    }
}
</style>