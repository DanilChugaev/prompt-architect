<template>
  <Header />

  <div class="container row">
    <Form v-model="prompt" class="flex-1" />

    <div class="column flex-1">
      <Text
        v-model="prompt"
        id="prompt"
        description="Его можно доработать и скопировать"
        type="textarea"
        :label
      />

      <Button class="container__copy-btn" @click="copyPrompt">
        Скопировать
      </Button>
    </div>
  </div>

  <Footer />

  <Toast position="top-center" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import Toast from 'primevue/toast';
import Button from 'primevue/button';

import Form from './components/Form.vue';
import Text from './components/Fields/Text.vue';
import { useNotifications } from './composables/useNotification.ts';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

const { copy } = useClipboard();
const { successNotify, errorNotify } = useNotifications();

const prompt = ref('');

const label = computed(() => {
  return `Итоговый промпт${prompt.value.length ? ` (~${Math.round(prompt.value.length / 3)} токенов)` : ''}`;
});

async function copyPrompt() {
  try {
    await copy(prompt.value);

    successNotify('Промпт скопирован!');
  } catch (error: any) {
    console.error(error);
    errorNotify('Ошибка копирования!');
  }
}
</script>

<style lang="postcss">
.container {
  align-items: flex-start !important;
  background-color: #252526;
  padding: 20px;
  border-radius: 8px;

  &__copy-btn {
    margin-top: 10px;
  }

  @media (max-width: 899px) {
    flex-direction: column;
    padding: 10px;
  }
}
</style>
