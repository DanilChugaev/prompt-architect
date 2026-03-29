<template>
  <label :for="id" class="label">
    {{ label }}
  </label>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
  label: string;
}>();
</script>
