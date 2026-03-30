import type { Option } from '../../types.ts';

export type MarketingTask =
  | 'content'
  | 'seo-task'
  | 'smm-post'
  | 'ad-copy'
  | 'strategy'
  | 'analytics-report';

export const marketingTasksOptions: Option<MarketingTask>[] = [
  {
    code: 'content',
    name: 'Написать маркетинговый контент',
    rules:
      'Напиши продающий / полезный контент в заданном формате и tone of voice.',
  },
  {
    code: 'seo-task',
    name: 'SEO-оптимизация текста / страницы',
    rules: 'Проведи SEO-анализ и предложи правки для улучшения позиций.',
  },
  {
    code: 'smm-post',
    name: 'Создать SMM-пост / контент-план',
    rules: 'Создай посты или контент-план под выбранную площадку и цель.',
  },
  {
    code: 'ad-copy',
    name: 'Написать рекламные креативы / объявления',
    rules: 'Напиши рекламные тексты с сильными заголовками и CTA.',
  },
  {
    code: 'strategy',
    name: 'Маркетинговая стратегия / воронка',
    rules:
      'Разработай стратегию или воронку продаж под указанную цель и бюджет.',
  },
  {
    code: 'analytics-report',
    name: 'Анализ метрик и отчёт',
    rules: 'Проанализируй данные аналитики и дай рекомендации по росту.',
  },
];
