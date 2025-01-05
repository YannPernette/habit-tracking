<script lang="ts" setup>
defineProps<{
  id?: string;
  placeholder: string;
  type: string;
  disabled?: boolean;
  modelValue: string;
}>();

const emit = defineEmits(['update:modelValue']); // Déclare l'événement `update:modelValue`

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value); // Utilise `emit` pour envoyer l'événement
};
</script>

<template>
  <input
    :id="id"
    :class="{
      'input': true,
      '-disabled': disabled
    }"
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    :disabled="disabled"
    @input="handleInput"
  >
</template>


<style lang="scss">
.input {
  width: -webkit-fill-available;
  color: $black;
  border: 1px solid $gray100;
  padding: remTo(16px);
  border-radius: remTo(8px);

  &::placeholder {
    color: $gray400;
  }

  &:focus-visible {
    outline: solid 2px $primary;
  }

  &.-disabled {
    color: $gray400;
    border: 1px solid $gray400;
    background-color: $gray100;
    outline: none;
    cursor: not-allowed;
  }
}
</style>
