import type { Option } from '../../types.ts';

export type DevTech = 'js' | 'ts' | 'vue' | 'react' | 'python' | 'go' | 'java';

export const devTechOptions: Option<DevTech>[] = [
  // todo: incompatibleWith добавить взаимоисключение, например, выбран js - снимаем ts и наоборот
  // todo: если выбрано vue и ts например, добавлять доп правило (используй lang="ts" у тега script) и также для других
  {
    code: 'js',
    name: 'JavaScript (Vanilla/Node)',
    rules: `
      - Используй ES6+ синтаксис (const/let, arrow functions).
      - Модульная система (ESM).`,
    tools: [
      { code: 'jest', name: 'Jest', rules: '' },
      { code: 'mocha', name: 'Mocha + Chai', rules: '' },
      { code: 'vitest', name: 'Vitest', rules: '' },
    ],
  },
  {
    code: 'ts',
    name: 'Typescript',
    rules: `
      - Используй ES6+ синтаксис (const/let, arrow functions).
      - Модульная система (ESM).
      - Включи строгую типизацию.
      - Избегай 'any'.`,
    tools: [
      { code: 'jest', name: 'Jest', rules: '' },
      { code: 'mocha', name: 'Mocha + Chai', rules: '' },
      { code: 'vitest', name: 'Vitest', rules: '' },
    ],
  },
  {
    code: 'vue',
    name: 'Vue.js (3.x)',
    rules: `
      - Используй Composition API через "script setup".
      - Избегай Options API для нового кода.
      - Предпочитай однофайловые компоненты (.vue).`,
    tools: [
      { code: 'vitest', name: 'Vitest', rules: '' },
      { code: '@vue/test-utils', name: 'Vue Test Utils', rules: '' },
      { code: 'cypress', name: 'Cypress', rules: '' },
      { code: 'vue-use', name: 'VueUse', rules: '' }, // todo: выделить в отдельный libs
    ],
  },
  {
    code: 'react',
    name: 'React (JS/TS)',
    rules: `
      - Используй функциональные компоненты и Hooks.
      - Избегай class components.
      - Соблюдай правила хуков.`,
    tools: [
      { code: 'rtl', name: 'React Testing Library', rules: '' },
      { code: 'jest', name: 'Jest', rules: '' },
      { code: 'cypress', name: 'Cypress (E2E)', rules: '' },
      { code: 'playwright', name: 'Playwright', rules: '' },
    ],
  },
  {
    code: 'python',
    name: 'Python',
    rules: `
      - Следуй PEP8.
      - Используй типизацию (Type Hints).
      - Пиши чистый, модульный код.`,
    tools: [
      { code: 'pytest', name: 'pytest', rules: '' },
      { code: 'unittest', name: 'unittest', rules: '' },
      { code: 'mypy', name: 'Mypy (Static Type Check)', rules: '' },
    ],
  },
  {
    code: 'go',
    name: 'Go (Golang)',
    rules: `
      - Следуй Effective Go.
      - Обрабатывай ошибки явно.
      - Используй контексты для отмены операций.`,
    tools: [
      { code: 'gotest', name: 'go test (stdlib)', rules: '' },
      { code: 'testify', name: 'Testify', rules: '' },
      { code: 'gomock', name: 'GoMock', rules: '' },
      { code: 'golangci', name: 'golangci-lint', rules: '' },
      { code: 'gin', name: 'Gin Web Framework', rules: '' },
    ],
  },
  {
    code: 'java',
    name: 'Java (17+ / Spring Boot)',
    rules: `
      - Используй Java 17+ (records, sealed classes, pattern matching).
      - Следуй принципам Clean Architecture и SOLID.
      - Для backend — Spring Boot 3.x.
      - Обязательно обрабатывай исключения, логирование и валидацию.`,
    tools: [
      { code: 'junit5', name: 'JUnit 5', rules: '' },
      { code: 'mockito', name: 'Mockito', rules: '' },
      { code: 'maven', name: 'Maven', rules: '' },
      { code: 'gradle', name: 'Gradle', rules: '' },
      { code: 'spring-test', name: 'Spring Boot Test', rules: '' },
    ],
  },
];
