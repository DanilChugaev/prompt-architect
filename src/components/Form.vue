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
      label="Технология:"
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

    <Button @click="clearPrompt">Очистить форму</Button>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import { useStorage } from '@vueuse/core';
import Button from 'primevue/button';

import Select from './Fields/Select.vue';

import { aiModelsOptions } from '../data/ai-models.ts';
import { domainsOptions, type DomainType } from '../data/domains.ts';
import { languages } from '../data/languages';
import { taskTypesOptions } from '../data/task-types.ts';
import Text from './Fields/Text.vue';
import type { Option } from '../types.ts';

const model = defineModel({ default: '' });

const defaultOption = {
  code: '',
  name: '',
  rules: '',
};

const aiModel = useStorage<Option>('ai-model', defaultOption);
const domain = useStorage<Option>('domain', defaultOption);
const language = useStorage<Option>('language', defaultOption);
const taskType = useStorage<Option>('task-type', defaultOption);
const additionalRequirements = useStorage<string>(
  'additional-requirements',
  '',
);
const inputData = useStorage<string>('input-data', '');

const languagesOptions = computed<Option[]>(
  () => languages[domain.value.code as DomainType] ?? [],
);

const roleStr = computed(() => {
  if (!aiModel.value.code) return '';

  let data = `# ROLE\n`;
  data += aiModel.value.rules;
  data += '\n';
  data += '\n';

  return data;
});
const domainStr = computed(() => {
  if (!domain.value.code) return '';

  return `Сфера: ${domain.value.rules}\n`;
});
const languageStr = computed(() => {
  if (!language.value.code) return '';

  let data = `Язык: ${language.value.name}\n`;
  data += `Правила кода: ${language.value.rules}\n`;

  return data;
});
const contextStr = computed(() => {
  if (!domainStr.value && !languageStr.value) return '';

  let data = `# CONTEXT\n`;
  data += domainStr.value;
  data += languageStr.value;

  data += '\n';

  return data;
});
const additionalRequirementsStr = computed(() => {
  if (!additionalRequirements.value) return '';

  return `Дополнительные требования по задаче: ${additionalRequirements.value}\n`;
});
const taskStr = computed(() => {
  if (!taskType.value.code && !additionalRequirementsStr.value) return '';

  let data = `# TASK\n`;

  data += taskType.value.rules;

  if (taskType.value.code) {
    data += '\n';
  }

  data += additionalRequirementsStr.value;
  data += '\n';

  return data;
});
const inputDataStr = computed(() => {
  if (!inputData.value) return '';

  let data = `# INPUT DATA\n`;
  data += inputData.value;
  data += '\n';
  data += '\n';

  return data;
});
const outputFormatStr = computed(() => {
  let data = `# OUTPUT FORMAT\n`; // todo сделать в виде списка для выбора нужного формата вывода
  data += `- Предоставь решение в виде блока кода (Markdown).\n`;
  data += `- Если код сложный, добавь краткие комментарии.`; // todo добавить уровень сложности объяснений

  if (aiModel.value.code === 'qwen') {
    data += '\n';
    data += `- Сначала напиши краткий план действий.`;
  }

  return data;
});

const prompt = computed(() => {
  let prompt = '';

  prompt += roleStr.value;
  prompt += contextStr.value;
  prompt += taskStr.value;
  prompt += inputDataStr.value;
  prompt += outputFormatStr.value;

  return prompt;
});

function clearPrompt() {
  aiModel.value = defaultOption;
  domain.value = defaultOption;
  language.value = defaultOption;
  taskType.value = defaultOption;
  additionalRequirements.value = '';
  inputData.value = '';
}

watchEffect(() => {
  model.value = prompt.value;
});
</script>

<style scoped lang="postcss">
.form {
  gap: 10px;
}
</style>
