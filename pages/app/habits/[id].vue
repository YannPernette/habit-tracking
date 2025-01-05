<script setup lang='ts'>
const { id } = useRoute().params;
const date = ref()
const completed = ref(false)

const { data, refresh } = await useAsyncData('habit', async () =>
    await useAPI(`/tracking/${id}/history`, {
        method: 'GET'
    })
)

async function completeHabit(event: Event) {
    event.preventDefault()

    await useAPI(`/tracking/${id}`, {
        method: 'POST',
        body: { completed: completed.value, date: date.value }
    })

    refresh()
}

// Fonction de formatage de la date
const formatDate = (dateString: string | number | Date) => {
    if (!dateString) return '';
    const dateObject = new Date(dateString); // Convertir la chaîne en objet Date
    return dateObject.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
</script>


<template>
    <div class="single-habit">
        <div class="single-habit__main mx-page">
            <div>
                <h1 class="single-habit__title">{{ data.habit.title }}</h1>
                <p class="single-habit__created">Habitude créée pour la première fois le {{
                    formatDate(data.habit.created_at) }}</p>
                <p>{{ data.habit.description }}</p>
            </div>
        </div>

        <div class="single-habit__history px-page">
            <h2>Historique</h2>
            <p>Retrouvez toutes les fois où vous avez complété cette habitude.</p>
            <ul class="single-habit__dates">
                <li v-for="(tracking, index) in data.trackings" :key="index">
                    <span>{{ formatDate(tracking.date) }} - {{ tracking.completed === 1 ? 'Complétée' : 'Non complétée' }}</span>
                </li>
            </ul>
        </div>

        <div class="single-habit__complete mx-page">
            <h3>Compléter votre habitude "{{ data.habit.title }}"</h3>
            <form @submit="completeHabit($event)">
                <div class="single-habit__completed">
                    <label for="completed">Habitude complétée ?</label>
                    <input id="completed" v-model="completed" type="checkbox">
                </div>
                <div>
                    <label for="date">Date</label>
                    <input id="date" v-model="date" type="date" required>
                </div>
                <div>
                    <Button class="single-habit__btn" type="submit">Compléter</Button>
                </div>
            </form>
        </div>
    </div>
</template>


<style lang='scss'>
.single-habit {
    margin-top: remTo(140px);

    &__main {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__created {
        margin-block-start: remTo(3px);
        font-size: $smalltxt;
        color: $gray800;
    }

    &__history {
        background: $primaryGradient;
        border-radius: remTo(100px) remTo(100px) 0 0;
        padding-block-start: remTo(20px);
        padding-block-end: remTo(70px);
        margin-block-start: remTo(40px);
    }

    &__dates {
        list-style: disc;
        display: flex;
        flex-direction: column;
        gap: remTo(10px);
        padding-left: remTo(45px);
        padding-top: remTo(20px);

        li {
            font-weight: 500;
        }
    }

    &__complete {
        position: sticky;
        bottom: 20px;
        justify-self: self-end;
        margin-top: -256px;
        // margin-bottom: 100px;
        z-index: 10;
        background: white;
        padding: remTo(30px);
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
        width: fit-content;
        max-width: remTo(500px);
        border: 1px solid $primary;
        border-radius: 50px;
    }

    &__completed {
        display: flex;
        gap: remTo(10px);
        margin-bottom: 1rem;
    }

    &__btn {
        margin-top: 2rem;
    }
}
</style>