import type { Option } from '../types.ts';

export type DomainType = 'dev' | 'ops';

export const domainsOptions: Option<DomainType>[] = [
  {
    code: 'dev',
    name: 'Программирование',
    rules: 'Software Development',
  },
  {
    code: 'ops',
    name: 'Администрирование',
    rules: 'DevOps & Infrastructure',
  },
];
