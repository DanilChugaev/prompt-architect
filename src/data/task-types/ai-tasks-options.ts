import type { Option } from '../../types.ts';

export type AiTask =
  | 'prompt'
  | 'rag'
  | 'agent'
  | 'evaluation'
  | 'fine-tune'
  | 'ollama';

export const aiTasksOptions: Option<AiTask>[] = [
  {
    code: 'prompt',
    name: 'Создать / улучшить системный промпт',
    rules: 'Напиши эффективный системный промпт под указанную модель и задачу.',
  },
  {
    code: 'rag',
    name: 'RAG-пайплайн',
    rules:
      'Спроектируй Retrieval-Augmented Generation (индексация, retrieval, generation).',
  },
  {
    code: 'agent',
    name: 'Создать AI-агента',
    rules: 'Реализуй агента с инструментами (LangGraph / LlamaIndex / CrewAI).',
  },
  {
    code: 'evaluation',
    name: 'Оценка качества LLM',
    rules:
      'Предложи метрики и способ оценки ответов модели (RAGAS, faithfulness и т.д.).',
  },
  {
    code: 'fine-tune',
    name: 'Fine-tuning / LoRA',
    rules:
      'План fine-tuning модели под свою доменную задачу с минимальными затратами.',
  },
  {
    code: 'ollama',
    name: 'Интеграция локальной модели (Ollama)',
    rules: 'Настрой запуск, моделфайл и интеграцию Ollama в приложение.',
  },
];
