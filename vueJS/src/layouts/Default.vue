<script setup lang="ts">
</script>

<template>
    <header>
        <slot name="header"/>
    </header>

    <main>
        <slot/>
    </main>

    <footer>
        <slot name="footer"/>
    </footer>
</template>
