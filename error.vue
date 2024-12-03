<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as () => NuxtError,
    default: null
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <div v-if="error?.statusCode === 404">
        <p>{{ error.statusMessage }}</p>
    </div>
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>