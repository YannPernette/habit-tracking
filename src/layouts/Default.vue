<script setup lang="ts">
</script>

<template>
    <header class="header">
        <slot name="header"></slot>
    </header>

    <main>
        <slot></slot>
    </main>

    <footer class="footer">
        <slot name="footer"></slot>
    </footer>
</template>
