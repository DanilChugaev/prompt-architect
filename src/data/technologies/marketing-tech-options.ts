import type { Option } from '../../types.ts';

export type MarketingTech =
  | 'seo'
  | 'smm'
  | 'content'
  | 'email'
  | 'ppc'
  | 'analytics'
  | 'crm'
  | 'copywriting';

export const marketingTechOptions: Option<MarketingTech>[] = [
  {
    code: 'seo',
    name: 'SEO (поисковая оптимизация)',
    rules: `
      - Работай по White Hat SEO.
      - Анализируй семантику, кластеры, LSI.
      - Оптимизируй под Yandex + Google.
      - Всегда предлагай технические и контентные рекомендации.`,
    tools: [
      { code: 'yandex-webmaster', name: 'Яндекс.Вебмастер', rules: '' },
      {
        code: 'google-search-console',
        name: 'Google Search Console',
        rules: '',
      },
      { code: 'semrush', name: 'Semrush / Ahrefs', rules: '' },
      { code: 'screaming-frog', name: 'Screaming Frog', rules: '' },
    ],
  },
  {
    code: 'smm',
    name: 'SMM (VK, Telegram, Instagram)',
    rules: `
      - Создавай контент-план под целевую аудиторию.
      - Используй вовлекающие форматы (карусели, сторис, рилсы).
      - Работай с сообществами VK и Telegram-каналами.
      - Измеряй ER, охваты, вовлечённость.`,
    tools: [
      { code: 'tg-bot', name: 'Telegram Bot API', rules: '' },
      { code: 'vk-api', name: 'VK API', rules: '' },
      { code: 'canva', name: 'Canva / CapCut', rules: '' },
      { code: 'popsters', name: 'Popsters / TGStat', rules: '' },
    ],
  },
  {
    code: 'content',
    name: 'Контент-маркетинг',
    rules: `
      - Пиши полезный, SEO-friendly контент.
      - Используй storytelling и триггеры доверия.
      - Форматы: статьи, гайды, кейсы, видео-скрипты.
      - Соблюдай tone of voice бренда.`,
  },
  {
    code: 'email',
    name: 'Email-маркетинг',
    rules: `
      - Работай по GDPR / 152-ФЗ.
      - Делай сегментацию и персонализацию.
      - Используй A/B-тестирование заголовков и CTA.
      - Метрики: Open Rate, CTR, конверсия.`,
    tools: [
      { code: 'mailchimp', name: 'Mailchimp / SendPulse', rules: '' },
      { code: 'unisender', name: 'UniSender', rules: '' },
    ],
  },
  {
    code: 'ppc',
    name: 'Контекстная реклама (PPC)',
    rules: `
      - Настраивай под Яндекс.Директ + Google Ads.
      - Работай с минус-словами, автотаргетингом.
      - Оптимизируй по CPA / ROAS.
      - Делай A/B-тесты креативов и посадочных.`,
    tools: [
      { code: 'yandex-direct', name: 'Яндекс.Директ', rules: '' },
      { code: 'google-ads', name: 'Google Ads', rules: '' },
      { code: 'metrika', name: 'Яндекс.Метрика', rules: '' },
    ],
  },
  {
    code: 'analytics',
    name: 'Веб-аналитика',
    rules: `
      - Настраивай GA4 + Яндекс.Метрику.
      - Работай с воронками, когортами, LTV.
      - Делай отчёты и дашборды.
      - Ищи точки роста и аномалии.`,
    tools: [
      { code: 'ga4', name: 'Google Analytics 4', rules: '' },
      { code: 'metrika', name: 'Яндекс.Метрика', rules: '' },
      { code: 'power-bi', name: 'Power BI / Looker Studio', rules: '' },
    ],
  },
  {
    code: 'crm',
    name: 'CRM и воронки продаж',
    rules: `
      - Работай с AmoCRM / Bitrix24.
      - Строи автоматические воронки.
      - Настраивай триггерные рассылки и задачи.
      - Измеряй конверсию этапов.`,
    tools: [
      { code: 'amocrm', name: 'AmoCRM', rules: '' },
      { code: 'bitrix', name: 'Битрикс24', rules: '' },
    ],
  },
  {
    code: 'copywriting',
    name: 'Копирайтинг и продающие тексты',
    rules: `
      - Пиши по формулам AIDA / PAS / 4U.
      - Используй триггеры доверия и социальное доказательство.
      - Тестируй заголовки и CTA.
      - Соблюдай tone of voice бренда.`,
  },
];
