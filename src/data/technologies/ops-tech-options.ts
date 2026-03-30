import type { Option } from '../../types.ts';

export type OpsTech = 'bash' | 'yaml' | 'sql';

export const opsTechOptions: Option<OpsTech>[] = [
  {
    code: 'bash',
    name: 'Bash',
    rules:
      "Всегда проверяй exit codes ($?). Используй 'set -euo pipefail'. Избегай незащищенных переменных.",
    tools: [
      { code: 'shellcheck', name: 'ShellCheck', rules: '' },
      { code: 'shfmt', name: 'shfmt', rules: '' },
    ],
  },
  {
    code: 'yaml',
    name: 'YAML (Docker)',
    rules:
      'Строго соблюдай отступы. Используй лучшие практики безопасности (не хардкодь секреты).',
    tools: [
      { code: 'yamllint', name: 'yamllint', rules: '' },
      { code: 'kubeval', name: 'kubeval (K8s)', rules: '' },
      { code: 'ansible-lint', name: 'ansible-lint', rules: '' },
    ],
  },
  {
    code: 'sql',
    name: 'SQL (PostgreSQL / MySQL)',
    rules: `
      - Всегда оптимизируй запросы через EXPLAIN / ANALYZE.
      - Используй parameterized queries / prepared statements (защита от SQL-инъекций).
      - PostgreSQL: активно используй CTE, оконные функции, JSONB.
      - MySQL: учитывай индексы, покрывающие индексы и JOIN-стратегии.
      - Пиши читаемый SQL с комментариями и именованными подзапросами.`,
    tools: [
      { code: 'sqlfluff', name: 'SQLFluff (linter + formatter)', rules: '' },
      { code: 'pgformatter', name: 'pgFormatter (PostgreSQL)', rules: '' },
      { code: 'flyway', name: 'Flyway / Liquibase (миграции)', rules: '' },
      { code: 'dbdiagram', name: 'dbdiagram.io / ERD', rules: '' },
    ],
  },
];
