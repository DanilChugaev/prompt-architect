export const opsOptions = [
  {
    code: 'bash',
    name: 'Bash',
    rules: 'Всегда проверяй exit codes ($?). Используй \'set -euo pipefail\'. Избегай незащищенных переменных.',
    tools: [
      {code: 'shellcheck', name: 'ShellCheck'},
      {code: 'shfmt', name: 'shfmt'}
    ]
  },
  {
    code: 'yaml',
    name: 'YAML (Docker)',
    rules: 'Строго соблюдай отступы. Используй лучшие практики безопасности (не хардкодь секреты).',
    tools: [
      {code: 'yamllint', name: 'yamllint'},
      {code: 'kubeval', name: 'kubeval (K8s)'},
      {code: 'ansible-lint', name: 'ansible-lint'}
    ]
  },
  {
    code: 'sql',
    name: 'SQL',
    rules: 'Оптимизируй запросы (используй EXPLAIN). Избегай SQL-инъекций (используй плейсхолдеры).',
    tools: [
      {code: 'sqlfluff', name: 'SQLFluff'}
    ]
  },
]