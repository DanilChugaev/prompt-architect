<template>
  <div class="form column">
    <Select
      v-model="aiModel"
      id="aiModel"
      label="Целевая модель:"
      :options="aiModelsOptions"
    />

    <Select
      v-model="domain"
      id="domain"
      label="Сфера деятельности:"
      :options="domainsOptions"
      @update:model-value="language = { code: '', name: '', rules: '' }"
    />

    <Select
      v-model="language"
      id="language"
      label="Язык / Технология:"
      :options="languagesOptions"
    />

    <Select
      v-model="taskType"
      id="taskType"
      label="Тип задачи:"
      :options="taskTypesOptions"
    />

    <Text
      v-model="additionalRequirements"
      id="additionalRequirements"
      label="Дополнительные требования:"
      placeholder="Например: Используй только стандартные библиотеки, код должен быть совместим с Python 3.8+, избегай глобальных переменных..."
      type="textarea"
    />

    <Text
      v-model="inputData"
      id="inputData"
      label="Входные данные (Код, Лог ошибки, Описание):"
      placeholder="Вставь сюда код или описание проблемы..."
      type="textarea"
    />

    <Button @click="createPrompt">Создать промпт</Button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStorage } from '@vueuse/core';
import Button from 'primevue/button';

import Select from './Fields/Select.vue';

import { aiModelsOptions } from '../data/ai-models.ts';
import { domainsOptions } from '../data/domains.ts';
import { languages } from '../data/languages';
import { taskTypesOptions } from '../data/task-types.ts';
import Text from './Fields/Text.vue';
import type { Option } from '../types.ts';

const model = defineModel({ default: '' });

const aiModel = useStorage<Option>('ai-model', {
  code: '',
  name: '',
  rules: '',
});
const domain = useStorage<Option>('domain', { code: '', name: '', rules: '' });
const language = useStorage<Option>('language', {
  code: '',
  name: '',
  rules: '',
});
const taskType = useStorage<Option>('task-type', {
  code: '',
  name: '',
  rules: '',
});
const additionalRequirements = useStorage<string>(
  'additional-requirements',
  '',
);
const inputData = useStorage<string>('input-data', '');

const languagesOptions = computed<Option[]>(
  () => languages[domain.value.code] ?? [],
);

const roleStr = computed(() => {
  let data = `### ROLE\n`;
  data += aiModel.value.rules;
  data += '\n';
  data += '\n';

  return data;
});
const contextStr = computed(() => {
  let data = `### CONTEXT\n`;
  data += `Сфера: ${domain.value.rules}\n`;
  data += `Технология: ${language.value.name}\n`;
  data += `Правила кода: ${language.value.rules}\n`;
  data += '\n';

  return data;
});
const taskStr = computed(() => {
  let data = `### TASK\n`;
  data += taskType.value.rules;
  data += `Дополнительные требования: ${additionalRequirements.value}\n`;
  data += '\n';

  return data;
});
const inputDataStr = computed(() => {
  let data = `### INPUT DATA\n`;
  data += inputData.value;
  data += '\n';
  data += '\n';

  return data;
});
const outputFormatStr = computed(() => {
  let data = `### OUTPUT FORMAT\n`;
  data += `- Предоставь решение в виде блока кода (Markdown).\n`;
  data += `- Если код сложный, добавь краткие комментарии.`; // todo добавить уровень сложности объяснений

  if (aiModel.value.code === 'qwen') {
    data += '\n';
    data += `- Сначала напиши краткий план действий.`;
  }

  return data;
});

async function createPrompt() {
  let prompt = '';

  prompt += roleStr.value;
  prompt += contextStr.value;
  prompt += taskStr.value;
  prompt += inputDataStr.value;
  prompt += outputFormatStr.value;

  model.value = prompt;
}
</script>

<style scoped lang="postcss">
.form {
  gap: 10px;
}
</style>
