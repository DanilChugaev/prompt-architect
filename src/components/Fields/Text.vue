<template>
  <div class="column">
    <Label v-if="label" :id :label  />

    <InputText
        v-if="type === 'text'"
        v-model="model"
        :id="id"
        :placeholder
        :type
    />

    <Textarea
        v-else
        v-model="model as string"
        :id="id"
        :placeholder
        :auto-resize="true"
    />

    <span v-if="description" class="info">{{description}}</span>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

import Label from './Label.vue';

const model = defineModel<any>();

withDefaults(
  defineProps<{
    id: string;
    label?: string;
    placeholder?: string;
    description?: string;
    type?: 'text' | 'textarea';
  }>(),
  {
    type: 'text',
  }
);
</script>
