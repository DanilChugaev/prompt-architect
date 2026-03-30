import type { Option } from '../types.ts';

export type DomainType = 'dev' | 'ops' | 'data' | 'ai' | 'docs';

export const domainsOptions: Option<DomainType>[] = [
  {
    code: 'dev',
    name: 'Программирование',
    rules: 'Software Development',
  },
  {
    code: 'ops',
    name: 'Администрирование',
    rules: 'DevOps & Infrastructure',
  },
  {
    code: 'data',
    name: 'Данные и аналитика',
    rules: 'Data Engineering / Analytics / BI',
  },
  {
    code: 'ai',
    name: 'ИИ и промпт-инжиниринг',
    rules: 'AI / ML / Prompt Engineering / RAG',
  },
  {
    code: 'docs',
    name: 'Документация и техрайтинг',
    rules: 'Technical Writing / API Docs / Wiki',
  },
];
