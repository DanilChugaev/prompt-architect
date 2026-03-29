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
      @update:model-value="technology = []"
    />

    <Select
      v-model="technology"
      id="technology"
      label="Технологии:"
      :options="techOptions"
      multiple
    />

    <Select
      v-model="taskType"
      id="taskType"
      label="Тип задачи:"
      :options="taskTypesOptions"
    />

    <Checkboxes
      v-if="toolsOptions.length"
      v-model="tools"
      label="Инструменты:"
      :options="toolsOptions"
    />

    {{ tools }}

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
import Text from './Fields/Text.vue';
import Checkboxes from './Fields/Checkboxes.vue';

import { aiModelsOptions } from '../data/ai-models.ts';
import { domainsOptions, type DomainType } from '../data/domains.ts';
import { technologies } from '../data/technologies/index.ts';
import { taskTypesOptions } from '../data/task-types.ts';
import type { Option } from '../types.ts';

const model = defineModel({ default: '' });

const defaultOption = {
  code: '',
  name: '',
  rules: '',
};

const aiModel = useStorage<Option>('ai-model', defaultOption);
const domain = useStorage<Option>('domain', defaultOption);
const technology = useStorage<Option[]>('technology', []);
const taskType = useStorage<Option>('task-type', defaultOption);
const tools = useStorage<string[]>('tools', []);
const additionalRequirements = useStorage<string>(
  'additional-requirements',
  '',
);
const inputData = useStorage<string>('input-data', '');

const techOptions = computed<Option[]>(
  () => technologies[domain.value.code as DomainType] ?? [],
);
const toolsOptions = computed<Option[]>(() => {
  if (technology.value.length && taskType.value.code === 'unit-test') {
    return technology.value
      .map(item => item.tools!)
      .flat()
      .filter(
        (item, index, self) =>
          index === self.findIndex(selfItem => selfItem.code === item.code),
      );
  }

  return [];
});

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
const techStr = computed(() => {
  if (!technology.value.length) return '';

  let data = `Технологии: ${technology.value.map(item => item.name).join(', ')}\n`;
  data += `Правила кода: ${technology.value.map(item => item.rules).join(', ')}\n`;

  return data;
});
const contextStr = computed(() => {
  if (!domainStr.value && !techStr.value) return '';

  let data = `# CONTEXT\n`;
  data += domainStr.value;
  data += techStr.value;

  data += '\n';

  return data;
});
const additionalRequirementsStr = computed(() => {
  if (!additionalRequirements.value) return '';

  return `Дополнительные требования по задаче: ${additionalRequirements.value}\n`;
});
const toolsStr = computed(() => {
  if (!tools.value.length) return '';

  return `Инструменты: ${tools.value.join(', ')}\n`;
});
const taskStr = computed(() => {
  if (!taskType.value.code && !additionalRequirementsStr.value) return '';

  let data = `# TASK\n`;

  data += taskType.value.rules;

  if (taskType.value.code) {
    data += '\n';
  }

  data += toolsStr.value;
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
  technology.value = [];
  taskType.value = defaultOption;
  tools.value = [];
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
