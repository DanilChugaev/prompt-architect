import type { Option } from '../../types.ts';
import type { DomainType } from '../domains.ts';
import { opsOptions } from './ops-options.ts';
import { devOptions } from './dev-options.ts';
import { dataOptions } from './data-options.ts';
import { aiOptions } from './ai-options.ts';
import { docsOptions } from './docs-options.ts';

export const technologies: Record<DomainType, Option[]> = {
  dev: devOptions,
  ops: opsOptions,
  data: dataOptions,
  ai: aiOptions,
  docs: docsOptions,
};
