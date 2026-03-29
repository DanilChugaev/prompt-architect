import type { Option } from '../../types.ts';

export const devOptions: Option[] = [
  {
    code: 'js',
    name: 'JavaScript (Vanilla/Node)',
    rules:
      'Используй ES6+ синтаксис (const/let, arrow functions). Модульная система (ESM).',
    tools: [
      { code: 'jest', name: 'Jest', rules: '' },
      { code: 'mocha', name: 'Mocha + Chai', rules: '' },
      { code: 'vitest', name: 'Vitest', rules: '' },
      { code: 'eslint', name: 'ESLint', rules: '' },
    ],
  },
  {
    code: 'vue',
    name: 'Vue.js (3.x)',
    rules:
      'Используй Composition API (<script setup>). Избегай Options API для нового кода. Однофайловые компоненты (.vue).',
    tools: [
      { code: 'vitest', name: 'Vitest', rules: '' },
      { code: 'vue-test-utils', name: 'Vue Test Utils', rules: '' },
      { code: 'cypress', name: 'Cypress', rules: '' },
      { code: 'eslint-vue', name: 'eslint-plugin-vue', rules: '' },
      { code: 'vue-use', name: 'VueUse', rules: '' }, // todo: выделить в отдельный libs
    ],
  },
  {
    code: 'react',
    name: 'React (JS/TS)',
    rules:
      'Используй функциональные компоненты и Hooks. Избегай class components. Соблюдай правила хуков.',
    tools: [
      { code: 'rtl', name: 'React Testing Library', rules: '' },
      { code: 'jest', name: 'Jest', rules: '' },
      { code: 'cypress', name: 'Cypress (E2E)', rules: '' },
      { code: 'playwright', name: 'Playwright', rules: '' },
      { code: 'eslint-react', name: 'eslint-plugin-react', rules: '' },
    ],
  },
  {
    code: 'python',
    name: 'Python',
    rules:
      'Следуй PEP8. Используй типизацию (Type Hints). Пиши чистый, модульный код.',
    tools: [
      { code: 'pytest', name: 'pytest', rules: '' },
      { code: 'unittest', name: 'unittest', rules: '' },
      { code: 'mypy', name: 'Mypy (Static Type Check)', rules: '' },
      { code: 'black', name: 'Black (Formatter)', rules: '' },
      { code: 'flake8', name: 'Flake8 (Linter)', rules: '' },
    ],
  },
  {
    code: 'go',
    name: 'Go (Golang)',
    rules:
      'Следуй Effective Go. Обрабатывай ошибки явно. Используй контексты для отмены операций.',
    tools: [
      { code: 'gotest', name: 'go test (stdlib)', rules: '' },
      { code: 'testify', name: 'Testify', rules: '' },
      { code: 'gomock', name: 'GoMock', rules: '' },
      { code: 'golangci', name: 'golangci-lint', rules: '' },
      { code: 'gin', name: 'Gin Web Framework', rules: '' },
    ],
  },
];
