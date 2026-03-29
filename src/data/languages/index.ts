import { opsOptions } from './ops-options.ts';
import { devOptions } from './dev-options.ts';
import type { Option } from '../../types.ts';

export const languages: Record<string, Option[]> = {
  dev: devOptions,
  ops: opsOptions,
};
