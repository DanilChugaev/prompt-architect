import type { Option } from '../../types.ts';

export type DocsTask =
  | 'api-docs'
  | 'user-guide'
  | 'article'
  | 'wiki'
  | 'changelog'
  | 'readme';

export const docsTasksOptions: Option<DocsTask>[] = [
  {
    code: 'api-docs',
    name: 'Документация API (OpenAPI)',
    rules:
      'Напиши или дополни OpenAPI/Swagger спецификацию с примерами и описаниями.',
  },
  {
    code: 'user-guide',
    name: 'User Guide / инструкция',
    rules: 'Напиши понятную пошаговую инструкцию для пользователей.',
  },
  {
    code: 'article',
    name: 'Техническая статья / блог-пост',
    rules: 'Напиши SEO-friendly техническую статью в заданном стиле.',
  },
  {
    code: 'wiki',
    name: 'Wiki-страница / knowledge base',
    rules: 'Создай структурированную страницу в Confluence / Notion / MkDocs.',
  },
  {
    code: 'changelog',
    name: 'Changelog / release notes',
    rules: 'Составь понятный changelog по коммитам / PR.',
  },
  {
    code: 'readme',
    name: 'README.md проекта',
    rules:
      'Напиши или перепиши качественный README с установкой, примерами и архитектурой.',
  },
];
