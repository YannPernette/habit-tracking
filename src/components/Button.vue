<script lang="ts" setup>
defineProps<{
    disabled?: boolean;
    variant?: "primary" | "outline";
}>();

</script>

<template>
    <button :class="{
        'button': true,
        '-outline': variant === 'outline',
        '-disabled': disabled
    }">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.button {
    display: block;
    font-weight: 500;
    background: $primary;
    color: $white;
    border-radius: rem(48px);
    padding: rem(16px) rem(32px);
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
            background: $lightest;
            border: $lightest;
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
