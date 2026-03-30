<template>
  <h1 class="row justify-center">
    <img class="img" src="/hammer.svg" alt="hammer icon" />
    <span>Prompt Architect</span>
  </h1>

  <div class="container row">
    <Form v-model="prompt" class="flex-1" />

    <div class="column flex-1">
      <Text
        v-model="prompt"
        id="prompt"
        label="Итоговый промпт"
        description="Его можно доработать и скопировать"
        type="textarea"
      />

      <Button @click="copy(prompt)">Скопировать</Button>
    </div>
  </div>

  <Toast position="top-center" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import Toast from 'primevue/toast';
import Button from 'primevue/button';

import Form from './components/Form.vue';
import Text from './components/Fields/Text.vue';

const { copy } = useClipboard(); // todo после копирования добавить нотифай что успешно скопировал

const prompt = ref('');
// todo добавить ночную и светлые темы
// todo переработать отступы
// todo показывать количество токенов созданного промпта
// todo сохранить пресет или поделиться ссылкой (query-параметры)
// todo У каждой технологии расписать тулзы по типам задач
// Например
// Тестирование свой массив тулзов
// Аудит безопасности свой массив
// И так далее
// todo Также тип задач должен зависеть от выбранной сферы деятельности
// todo Добавить выбор роли независимо от выбора модели
// todo Добавить иконки моделей
// todo Добавить иконки для кнопок
</script>

<style lang="postcss">
.container {
  align-items: flex-start !important;
  background-color: #252526;
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 899px) {
    flex-direction: column;
    padding: 10px;
  }
}
</style>
