import type { Option } from '../../types.ts';

export const aiTechOptions: Option[] = [
  {
    code: 'langchain',
    name: 'LangChain / LangGraph',
    rules: `
      - Используй LangChain Expression Language (LCEL).
      - Разделяй логику на chains / agents / tools.
      - Всегда добавляй память (memory) и tracing.
      - Для сложных workflow используй LangGraph.`,
    tools: [
      { code: 'langgraph', name: 'LangGraph', rules: '' },
      { code: 'langsmith', name: 'LangSmith (tracing)', rules: '' },
    ],
  },
  {
    code: 'llama-index',
    name: 'LlamaIndex (RAG)',
    rules: `
      - Строи RAG-пайплайны с Index + Query Engine.
      - Используй векторные хранилища (Chroma, PGVector).
      - Добавляй reranking и query rewriting.
      - Тестируй на evaluation metrics (faithfulness, relevance).`,
    tools: [
      { code: 'chroma', name: 'Chroma / PGVector', rules: '' },
      {
        code: 'llamaindex-embeddings',
        name: 'Embeddings (Ollama/HF)',
        rules: '',
      },
    ],
  },
  {
    code: 'huggingface',
    name: 'Hugging Face (Transformers)',
    rules: `
      - Загружай модели через pipeline или AutoModel.
      - Используй quantization (bitsandbytes / AWQ) для локального запуска.
      - Всегда проверяй лицензию и safety.
      - Для fine-tuning используй PEFT + LoRA.`,
    tools: [
      { code: 'peft', name: 'PEFT / LoRA', rules: '' },
      { code: 'bitsandbytes', name: 'bitsandbytes', rules: '' },
    ],
  },
  {
    code: 'rag',
    name: 'RAG (Retrieval-Augmented Generation)',
    rules: `
      - Всегда делай chunking + embedding + retrieval.
      - Используй hybrid search (keyword + vector).
      - Добавляй metadata filtering.
      - Оценивай качество через RAGAS или ARES.`,
  },
];
