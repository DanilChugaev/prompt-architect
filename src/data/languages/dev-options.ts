export const devOptions = [
  {
    code: 'js',
    name: 'JavaScript (Vanilla/Node)',
    rules:
      'Используй ES6+ синтаксис (const/let, arrow functions). Модульная система (ESM).',
    tools: [
      { code: 'jest', name: 'Jest' },
      { code: 'mocha', name: 'Mocha + Chai' },
      { code: 'vitest', name: 'Vitest' },
      { code: 'eslint', name: 'ESLint' },
    ],
  },
  {
    code: 'vue',
    name: 'Vue.js (3.x)',
    rules:
      'Используй Composition API (<script setup>). Избегай Options API для нового кода. Однофайловые компоненты (.vue).',
    tools: [
      { code: 'vitest', name: 'Vitest' },
      { code: 'vue-test-utils', name: 'Vue Test Utils' },
      { code: 'cypress', name: 'Cypress' },
      { code: 'eslint-vue', name: 'eslint-plugin-vue' },
      { code: 'vue-use', name: 'VueUse' }, // todo: выделить в отдельный libs
    ],
  },
  {
    id: 'react',
    name: 'React (JS/TS)',
    rules:
      'Используй функциональные компоненты и Hooks. Избегай class components. Соблюдай правила хуков.',
    tools: [
      { code: 'rtl', name: 'React Testing Library' },
      { code: 'jest', name: 'Jest' },
      { code: 'cypress', name: 'Cypress (E2E)' },
      { code: 'playwright', name: 'Playwright' },
      { code: 'eslint-react', name: 'eslint-plugin-react' },
    ],
  },
  {
    code: 'python',
    name: 'Python',
    rules:
      'Следуй PEP8. Используй типизацию (Type Hints). Пиши чистый, модульный код.',
    tools: [
      { code: 'pytest', name: 'pytest' },
      { code: 'unittest', name: 'unittest' },
      { code: 'mypy', name: 'Mypy (Static Type Check)' },
      { code: 'black', name: 'Black (Formatter)' },
      { code: 'flake8', name: 'Flake8 (Linter)' },
    ],
  },
  {
    code: 'go',
    name: 'Go (Golang)',
    rules:
      'Следуй Effective Go. Обрабатывай ошибки явно. Используй контексты для отмены операций.',
    tools: [
      { code: 'gotest', name: 'go test (stdlib)' },
      { code: 'testify', name: 'Testify' },
      { code: 'gomock', name: 'GoMock' },
      { code: 'golangci', name: 'golangci-lint' },
      { code: 'gin', name: 'Gin Web Framework' },
    ],
  },
];
