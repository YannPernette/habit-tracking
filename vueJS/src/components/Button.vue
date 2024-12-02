<script lang="ts" setup>
defineProps<{
  disabled?: boolean;
  variant?: "primary" | "outline" | "nobg";
  isRouterLink?: boolean;
  to?: string;
}>();

</script>

<template>
  <component :is="isRouterLink ? 'RouterLink' : 'button'" v-bind="isRouterLink ? { to } : { disabled }"
    :class="{
    button: true,
    '-outline': variant === 'outline',
    '-nobg': variant === 'nobg',
    '-disabled': disabled
    }"
    >
    <slot></slot>
  </component>
</template>

<style lang="scss">
.button {
  display: block;
  font-weight: 500;
  background: $primary;
  color: $light;
  border-radius: remTo(48px);
  padding: remTo(16px) remTo(32px);
  cursor: pointer;
  border: 1px solid $primary;
  text-decoration: none;
  text-align: center;
  transition: all .3s ease-in-out;

  &:hover {
    background: $dark;
  }

  &.-outline {
    background: transparent;
    color: $primary;

    &:hover {
      color: $dark;
    }
  }

  &.-nobg {
    color: $primary;
    background: transparent;
    border: transparent;

    &:hover {
      background: $lightAccent;
      border: $lightAccent;
    }
  }

  &.-disabled {
    color: $gray800;
    background: $gray100;
    border: $gray100;
    cursor: not-allowed;

    &.-outline {
      background: transparent;
      color: $gray400;
      border: 1px solid $gray400;
    }

    &.-nobg {
      background: transparent;
      color: $gray400;
      border: transparent;
    }
  }
}
</style>
