import type { Option } from '../../types.ts';

export const dataTechOptions: Option[] = [
  {
    code: 'pandas',
    name: 'Pandas (Python Data Analysis)',
    rules: `
      - Используй современный API (pandas 2.x).
      - Предпочитай vectorized операции вместо циклов.
      - Всегда проверяй типы данных и пропущенные значения.
      - Для больших датасетов используй chunking или Dask.`,
    tools: [
      { code: 'polars', name: 'Polars (быстрая альтернатива)', rules: '' },
      { code: 'numpy', name: 'NumPy', rules: '' },
      { code: 'jupyter', name: 'Jupyter Notebook', rules: '' },
    ],
  },
  {
    code: 'pyspark',
    name: 'PySpark (Big Data)',
    rules: `
      - Работай в distributed-режиме.
      - Используй DataFrame API вместо RDD.
      - Оптимизируй через Catalyst и Tungsten.
      - Всегда указывай schema при чтении данных.`,
    tools: [
      { code: 'spark-sql', name: 'Spark SQL', rules: '' },
      { code: 'delta-lake', name: 'Delta Lake', rules: '' },
      { code: 'iceberg', name: 'Apache Iceberg', rules: '' },
    ],
  },
  {
    code: 'dbt',
    name: 'dbt (Data Build Tool)',
    rules: `
      - Пиши модели в виде SQL + Jinja.
      - Используй dbt tests и sources.
      - Соблюдай naming convention (staging → marts).
      - Документируй всё через dbt docs.`,
    tools: [
      { code: 'dbt-core', name: 'dbt Core', rules: '' },
      {
        code: 'dbt-tests',
        name: 'dbt-expectations / Great Expectations',
        rules: '',
      },
    ],
  },
  {
    code: 'airflow',
    name: 'Apache Airflow (Orchestration)',
    rules: `
      - Пиши DAG'и с использованием TaskFlow API.
      - Используй XCom только по необходимости.
      - Добавляй retries и SLA.
      - Делай DAG'и idempotent и atomic.`,
    tools: [
      { code: 'celery', name: 'Celery Executor', rules: '' },
      {
        code: 'docker-operator',
        name: 'DockerOperator / KubernetesPodOperator',
        rules: '',
      },
    ],
  },
];
