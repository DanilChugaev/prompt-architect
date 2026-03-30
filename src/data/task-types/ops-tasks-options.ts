import type { Option } from '../../types.ts';

export type OpsTask =
  | 'docker'
  | 'cicd'
  | 'monitoring'
  | 'infra'
  | 'security'
  | 'backup';

export const opsTasksOptions: Option<OpsTask>[] = [
  {
    code: 'docker',
    name: 'Настроить Docker / Docker Compose',
    rules:
      'Напиши Dockerfile + docker-compose.yml с лучшими практиками безопасности и оптимизации.',
  },
  {
    code: 'cicd',
    name: 'CI/CD пайплайн',
    rules:
      'Создай или доработай GitHub Actions / GitLab CI / Jenkins пайплайн.',
  },
  {
    code: 'monitoring',
    name: 'Мониторинг и алерты',
    rules: 'Настрой Prometheus + Grafana / Loki / ELK с дашбордами и алертами.',
  },
  {
    code: 'infra',
    name: 'Инфраструктура как код',
    rules: 'Напиши Terraform / Ansible / Pulumi для описанной инфраструктуры.',
  },
  {
    code: 'security',
    name: 'Безопасность инфраструктуры',
    rules:
      'Проведи аудит и предложи улучшения безопасности (secrets, network, hardening).',
  },
  {
    code: 'backup',
    name: 'Бэкапы и восстановление',
    rules: 'Настрой автоматические бэкапы + план восстановления после сбоя.',
  },
];
