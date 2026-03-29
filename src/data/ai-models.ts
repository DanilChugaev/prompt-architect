import type { Option } from '../types.ts';

export const aiModelsOptions: Option[] = [
  {
    code: 'llama3',
    name: 'Llama 3 (Ollama)',
    rules:
      'Ты опытный инженер. Отвечай кратко и по делу. Сначала план, потом код.',
  },
  {
    code: 'qwen',
    name: 'Qwen 2.5 (Ollama)',
    rules:
      'Ты экспертная система. Думай шаг за шагом (Chain of Thought). Проанализируй задачу перед решением.',
  },
  {
    code: 'grok',
    name: 'Grok',
    rules:
      'Ты прагматичный хакер. Давай самые эффективные решения, без лишней воды.',
  },
  {
    code: 'mistral',
    name: 'Mistral (Ollama)',
    rules:
      'Ты старший разработчик. Твой код должен быть надежным и готовым к продакшену.',
  },
];
