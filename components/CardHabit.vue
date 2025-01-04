<script setup lang="ts">
defineProps<{
  id: number,
  title: string,
  description: string,
}>();

const newTitle = ref('')
const newDescription = ref('')

async function deleteHabit(habitId: number) {
  try {
    // Appel de l'API avec la méthode DELETE
    await useAPI(`/habits/${habitId}`, {
      method: 'DELETE',
    });

    // Optionnel : Ajouter une logique pour mettre à jour l'interface utilisateur après la suppression
    console.log(`Habitude avec l'ID ${habitId} supprimée avec succès.`);
    $trigger('habit:deleted')
  } catch (error) {
    console.error("Erreur lors de la suppression de l'habitude :", error);
  }
}

async function editHabit(event: Event, habitId: number) {
    event.preventDefault()

    await useAPI(`/habits/${habitId}`, {
        method: 'PUT',
        body: { title: newTitle.value, description: newDescription.value }
    })

    $trigger('habit:edited')
}
</script>


<template>
  <div class="cardHabit">
    <a :href="`/app/habits/${id}`">
    <div class="cardHabit__content">
      <p class="cardHabit__title">{{ title }}</p>
      <p>{{ description }}</p>
    </div>

    <div class="cardHabit__actions">
      <span class="cardHabit__edit">
        <Edit class="cardHabit__editIcon" />
        <p class="cardHabit__editText">Modifier</p>
      </span>
      <span class="cardHabit__delete" @click="deleteHabit(id)">
        <Delete class="cardHabit__deleteIcon" />
        <p class="cardHabit__deleteText">Supprimer</p>
      </span>
    </div>

    <div>
        <form @submit="editHabit($event, id)">
            <div>
                <label for="newTitle">Nouveau titre</label>
                <input id="newTitle" v-model="newTitle" type="text" required>
            </div>
            <div>
                <label for="newDescription">Nouvelle description</label>
                <input id="newDescription" v-model="newDescription" type="text">
            </div>
            <div>
                <button type="submit">ENVOYER</button>
            </div>
        </form>
    </div>
  </a>
  </div>
</template>


<style lang="scss">
.cardHabit {
  padding: remTo(20px) remTo(16px);
  border-radius: remTo(8px);
  border: 1px solid $black;
  display: flex;
  flex-direction: column;
  gap: remTo(20px);
  background-color: $light;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  * {
    margin: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: remTo(10px);
  }

  &__title {
    font-size: remTo(20px);
    font-weight: bold;
  }

  &__actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: solid 1px $dark;
    padding-top: remTo(5px);
    color: $primary;
  }

  &__edit, &__delete {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: remTo(5px);
    padding-block: remTo(12px);
    transition: all .2s ease-in-out;

    &:hover {
      background-color: $lightestAccent;
    }
  }

  &__editIcon,
  &__deleteIcon {
    width: 25px;
    height: 25px;
    margin-inline-end: remTo(5px);
  }
}
</style>
