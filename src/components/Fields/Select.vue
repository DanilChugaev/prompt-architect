<template>
  <div class="column">
    <Label :id :label />

    <Select
      v-model="model"
      :options
      :placeholder
      filter
      filter-placeholder="Поиск"
      show-clear
      optionLabel="name"
      :input-id="id"
      class="w-full"
    />

    <span class="info">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import Select from 'primevue/select';

import Label from './Label.vue';
import type { Option } from '../../types.ts';

const model = defineModel();

defineProps<{
  id: string;
  label: string;
  options: Option[]; // todo добавить тип
  placeholder?: string;
  description?: string;
}>();
</script>
