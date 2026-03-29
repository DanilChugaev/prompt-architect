import { opsOptions } from './ops-options.ts';
import { devOptions } from './dev-options.ts';

export const languages: Record<string, any> = {
  dev: devOptions,
  ops: opsOptions,
};
