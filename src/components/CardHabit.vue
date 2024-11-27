<script setup lang="ts">
import Edit from './icon/Edit.vue';
import Delete from './icon/Delete.vue';
</script>


<template>
  <div class="cardHabit">
    <p class="cardHabit__title">Faire ses devoirs</p>
    <div class="cardHabit__actions">
      <span class="cardHabit__edit"><Edit class="cardHabit__editIcon" /><p class="cardHabit__editText">Modifier</p></span>
      <span class="cardHabit__delete"><Delete class="cardHabit__deleteIcon" /><p class="cardHabit__deleteText">Supprimer</p></span>
    </div>
  </div>
</template>


<style lang="scss">
.cardHabit {
  margin-top: 100px;
  margin-left: 20px;
  padding: remTo(5px) remTo(16px);
  border-radius: remTo(8px);
  border: 1px solid $black;
  width: fit-content;
  display: flex;
  gap: remTo(30px);
  background-color: $light;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  &__title {
    font-size: $largetxt;
  }

  &__actions {
    display: flex;
    gap: remTo(15px);
  }

  &__edit, &__delete {
    color: $primary;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__edit::after {
    content: "";
    width: 2px;
    height: 100%;
    background-color: $primary;
    margin-inline-start: remTo(15px);
  }

  &__editIcon, &__deleteIcon {
    width: 25px;
    height: 25px;
    margin-inline-end: remTo(5px);
  }
}
</style>
