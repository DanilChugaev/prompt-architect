import type { Option } from '../../types.ts';

export type DocsTech = 'markdown' | 'mkdocs' | 'openapi' | 'sphinx';

export const docsTechOptions: Option<DocsTech>[] = [
  {
    code: 'markdown',
    name: 'Markdown + GitHub Flavored',
    rules: `
      - Используй GitHub-flavored Markdown.
      - Добавляй таблицы, task lists и collapsible sections.
      - Для кода используй language-specific подсветку.
      - Всегда пиши кратко и с примерами.`,
  },
  {
    code: 'mkdocs',
    name: 'MkDocs + Material',
    rules: `
      - Используй MkDocs Material theme.
      - Настраивай navigation и search.
      - Добавляй admonitions и code annotations.
      - Генерируй документацию из Markdown + mkdocstrings.`,
    tools: [
      { code: 'mkdocstrings', name: 'mkdocstrings', rules: '' },
      { code: 'mkdocs-material', name: 'Material for MkDocs', rules: '' },
    ],
  },
  {
    code: 'openapi',
    name: 'OpenAPI / Swagger',
    rules: `
      - Пиши OpenAPI 3.1 specification.
      - Используй references ($ref) для переиспользования.
      - Добавляй examples и security schemes.
      - Генерируй из кода через FastAPI / Springdoc.`,
    tools: [
      { code: 'redoc', name: 'Redoc / Swagger UI', rules: '' },
      { code: 'stoplight', name: 'Stoplight Studio', rules: '' },
    ],
  },
  {
    code: 'sphinx',
    name: 'Sphinx (Python docs)',
    rules: `
      - Используй reStructuredText или MyST Markdown.
      - Автогенерируй API docs через autodoc.
      - Добавляй intersphinx и Napoleon для Google-style docstrings.`,
  },
];
