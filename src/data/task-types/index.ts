import type { Option } from '../../types.ts';
import type { Domain } from '../domains.ts';
import { devTasksOptions } from './dev-tasks-options.ts';
import { opsTasksOptions } from './ops-tasks-options.ts';
import { dataTasksOptions } from './data-tasks-options.ts';
import { aiTasksOptions } from './ai-tasks-options.ts';
import { docsTasksOptions } from './docs-tasks-options.ts';
import { marketingTasksOptions } from './marketing-tasks-options.ts';

export const taskTypes: Record<Domain, Option[]> = {
  dev: devTasksOptions,
  ops: opsTasksOptions,
  data: dataTasksOptions,
  ai: aiTasksOptions,
  docs: docsTasksOptions,
  marketing: marketingTasksOptions,
};
