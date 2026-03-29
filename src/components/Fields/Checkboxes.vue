<template>
  <div class="column">
    <Label :label />

    <div v-for="item in options" :key="item.code" class="row">
      <Checkbox v-model="model" :input-id="item.code" :value="item.code" />

      <Label :id="item.code" :label="item.name" />
    </div>

    <span class="info">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox';
import Label from './Label.vue';
import type { Option } from '../../types.ts';

const model = defineModel<string[]>();

defineProps<{
  label: string;
  options: Option[];
  placeholder?: string;
  description?: string;
}>();
</script>
