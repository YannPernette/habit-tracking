<script lang="ts" setup>
defineProps<{
  placeholder: string;
  type: string;
  disabled?: boolean;
}>();
</script>


<template>
  <input :class="{
    'input': true,
    '-disabled': disabled
  }" :placeholder="placeholder" :type="type" />
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
