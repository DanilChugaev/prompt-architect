import type { Option } from '../../types.ts';
import type { Domain } from '../domains.ts';
import { opsTechOptions } from './ops-tech-options.ts';
import { devTechOptions } from './dev-tech-options.ts';
import { dataTechOptions } from './data-tech-options.ts';
import { aiTechOptions } from './ai-tech-options.ts';
import { docsTechOptions } from './docs-tech-options.ts';
import { marketingTechOptions } from './marketing-tech-options.ts';

export const technologies: Record<Domain, Option[]> = {
  dev: devTechOptions,
  ops: opsTechOptions,
  data: dataTechOptions,
  ai: aiTechOptions,
  docs: docsTechOptions,
  marketing: marketingTechOptions,
};
