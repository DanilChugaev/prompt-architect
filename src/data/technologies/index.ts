import { opsOptions } from './ops-options.ts';
import { devOptions } from './dev-options.ts';
import type { Option } from '../../types.ts';
import type { DomainType } from '../domains.ts';

export const technologies: Record<DomainType, Option[]> = {
  dev: devOptions,
  ops: opsOptions,
};
