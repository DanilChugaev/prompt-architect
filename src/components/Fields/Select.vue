<template>
  <div class="column">
    <Label :id :label />

    <MultiSelect
      v-if="multiple"
      v-model="model"
      class="w-full"
      filter-placeholder="Поиск"
      option-label="name"
      :options
      :placeholder
      :input-id="id"
      filter
      show-clear
    />

    <Select
      v-else
      v-model="model"
      class="w-full"
      filter-placeholder="Поиск"
      option-label="name"
      :options
      :placeholder
      :input-id="id"
      filter
      show-clear
    />

    <span class="info">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import Select from 'primevue/select';
import MultiSelect from 'primevue/multiselect';

import Label from './Label.vue';
import type { Option } from '../../types.ts';

const model = defineModel();

defineProps<{
  id: string;
  label: string;
  options: Option[]; // todo добавить тип
  placeholder?: string;
  description?: string;
  multiple?: boolean;
}>();
</script>
