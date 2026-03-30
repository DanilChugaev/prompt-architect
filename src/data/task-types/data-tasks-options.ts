import type { Option } from '../../types.ts';

export type DataTask =
  | 'etl'
  | 'analysis'
  | 'dashboard'
  | 'sql-task'
  | 'bigdata'
  | 'migration';

export const dataTasksOptions: Option<DataTask>[] = [
  {
    code: 'etl',
    name: 'ETL / ELT пайплайн',
    rules:
      'Спроектируй или реализуй пайплайн обработки данных (Airflow / dbt / Spark).',
  },
  {
    code: 'analysis',
    name: 'Анализ данных',
    rules: 'Проведи exploratory analysis и дай инсайты + визуализации.',
  },
  {
    code: 'dashboard',
    name: 'Создать дашборд',
    rules:
      'Построй интерактивный дашборд в Power BI / Looker Studio / Superset.',
  },
  {
    code: 'sql-task',
    name: 'Сложный SQL-запрос / оптимизация',
    rules:
      'Напиши / оптимизируй запрос с использованием CTE, оконных функций и индексов.',
  },
  {
    code: 'bigdata',
    name: 'Работа с большими данными',
    rules:
      'Предложи решение для обработки датасетов > 100 ГБ (Spark / Dask / Polars).',
  },
  {
    code: 'migration',
    name: 'Миграция данных / БД',
    rules:
      'План и скрипты миграции между БД или версиями с минимальным downtime.',
  },
];
