import type { Option } from '../../types.ts';

export const opsOptions: Option[] = [
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
    name: 'SQL',
    rules:
      'Оптимизируй запросы (используй EXPLAIN). Избегай SQL-инъекций (используй плейсхолдеры).',
    tools: [{ code: 'sqlfluff', name: 'SQLFluff', rules: '' }],
  },
];
