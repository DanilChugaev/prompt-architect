# Prompt Architect

Интерактивный веб-редактор для генерации структурированных промптов к AI-моделям (Ollama, Cloud и др.).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## О проекте

Prompt Architect помогает составлять качественные и детализированные промпты для AI-моделей, используя структурированную форму с выбором:

- **Целевой AI-модели** — Nemotron, Llama, Qwen, Gemma, Phi, DeepSeek, Mistral, Codestral, Grok
- **Сферы деятельности** — Программирование, DevOps, Data Engineering, AI/ML, Документация, Маркетинг
- **Технологий** — зависит от выбранной сферы
- **Типа задачи** — зависит от сферы и технологий
- **Инструментов** — зависит от выбранных технологий
- **Дополнительных требований** — свободное текстовое поле
- **Входных данных** — код, лог ошибки, описание проблемы и т.д.

На основе выбранных параметров приложение генерирует готовый промпт в формате Markdown с секциями:

1. `# Роль` — описание роли AI на основе выбранной модели
2. `# Контекст` — сфера и технологии
3. `# Задача` — тип задачи, инструменты, дополнительные требования
4. `# Входные данные` — предоставленные пользователем данные
5. `# Формат выходных данных` — требования к ответу

## Быстрый старт

### Требования

- [Node.js](https://nodejs.org/) >= 18
- [Yarn](https://yarnpkg.com/) или [npm](https://www.npmjs.com/)

### Установка

```bash
# Клонировать репозиторий
git clone git@github.com:DanilChugaev/prompt-architect.git
cd prompt-architect

# Установить зависимости
yarn install
```

### Запуск в режиме разработки

```bash
yarn dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Сборка для продакшена

```bash
yarn build
```

Собранные файлы будут в папке `dist/`. Проект настроен с `base: '/prompt-architect/'` для развёртывания через GitHub Pages.

### Превью продакшен-сборки

```bash
yarn preview
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `yarn dev` | Запуск dev-сервера с HMR |
| `yarn build` | TypeScript check + сборка для продакшена |
| `yarn preview` | Локальный просмотр продакшен-сборки |
| `yarn lint` | Проверка кода через ESLint |
| `yarn lint:fix` | Автоматическое исправление проблем ESLint |
| `yarn format` | Форматирование кода через Prettier |
| `yarn ts:check` | Проверка типов TypeScript |

## Стек технологий

| Категория | Технология |
|-----------|------------|
| **Фреймворк** | [Vue 3](https://vuejs.org/) с `<script setup>` |
| **Язык** | [TypeScript](https://www.typescriptlang.org/) 5.9 |
| **Бандлер** | [Vite](https://vite.dev/) 7 |
| **UI-компоненты** | [PrimeVue](https://primevue.org/) 4 |
| **Composables** | [@vueuse/core](https://vueuse.org/) 14 |
| **Валидация** | [Zod](https://zod.dev/) 4 |
| **PWA** | [vite-plugin-pwa](https://vite-pwa.org/) |
| **Стили** | PostCSS + postcss-nested + postcss-custom-media |
| **Линтинг** | ESLint + Prettier |

## Структура проекта

```
prompt-architect/
├── public/                  # Статические файлы и иконки PWA
├── src/
│   ├── components/          # Vue-компоненты
│   │   ├── Fields/          # Компоненты полей формы
│   │   │   ├── Checkboxes.vue
│   │   │   ├── Label.vue
│   │   │   ├── Select.vue
│   │   │   └── Text.vue
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── Form.vue         # Основная форма генерации промпта
│   ├── composables/         # Vue composables
│   │   └── useNotification.ts
│   ├── data/                # Данные для выпадающих списков
│   │   ├── ai-models.ts     # AI-модели и их правила
│   │   ├── domains.ts       # Сферы деятельности
│   │   ├── task-types/      # Типы задач по сферам
│   │   └── technologies/    # Технологии по сферам
│   ├── styles/              # Стили
│   │   ├── main.pcss        # Глобальные стили
│   │   ├── classes.pcss     # Утилитарные классы
│   │   └── primevue.pcss    # Переопределение PrimeVue
│   ├── types.ts             # TypeScript-типы
│   ├── App.vue              # Корневой компонент
│   └── main.ts              # Точка входа
├── index.html
├── vite.config.ts           # Конфигурация Vite + PWA
├── tsconfig.json            # Конфигурация TypeScript
├── eslint.config.mjs        # Конфигурация ESLint
├── postcss.config.mjs       # Конфигурация PostCSS
└── package.json
```

## Развёртывание

Проект настроен как PWA и может быть развёрнут на любом статическом хостинге:

```bash
yarn build
# файлы в dist/ готовы к развёртыванию
```

Поддерживается установка как прогрессивное веб-приложение (PWA) с автообновлением.

## Скриншот

Приложение состоит из двух панелей:
- **Левая** — форма с выбором параметров (модель, сфера, технологии, тип задачи, инструменты, требования)
- **Правая** — превью сгенерированного промпта с подсчётом токенов и кнопкой копирования

## Лицензия

[MIT](LICENSE) — Copyright (c) 2026 Danil Chugaev

## Contributing

Pull requests приветствуются! Для значительных изменений откройте issue, чтобы обсудить, что вы хотите улучшить.