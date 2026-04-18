'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { AnimatedCounter } from './AnimatedCounter';

const cases = [
  {
    title: 'AI Data Warehouse',
    description:
      'Корпоративное хранилище данных с AI-оркестрацией: 10 источников → единая модель. Автоматический ETL, мониторинг качества, self-healing pipelines.',
    metric: { value: 80, suffix: '%', prefix: '-', label: 'ручной работы' },
    tags: ['PostgreSQL', 'dbt', 'Python', 'Airflow'],
    accent: 'cyan' as const,
  },
  {
    title: 'AI Agent Ecosystem',
    description:
      'Экосистема из 12 AI-агентов для автоматизации аналитики: deep research, генерация ТЗ, обработка документов, дайджесты, парсинг.',
    metric: { value: 12, suffix: '', prefix: '', label: 'автономных агентов' },
    tags: ['Claude AI', 'MCP', 'Python', 'Orchestration'],
    accent: 'violet' as const,
  },
  {
    title: 'Predictive Churn',
    description:
      'ML-модель предсказания оттока клиентов SaaS. Proactive outreach по сигналам: активность, биллинг, обращения в поддержку.',
    metric: { value: 15, suffix: '%', prefix: '+', label: 'рост retention' },
    tags: ['Python', 'scikit-learn', 'Feature Store', 'A/B'],
    accent: 'cyan' as const,
  },
  {
    title: 'Document Intelligence',
    description:
      'Автоматическая обработка бухгалтерских документов: распознавание, классификация, извлечение данных, загрузка в учётную систему.',
    metric: { value: 500, suffix: '+', prefix: '', label: 'документов / день' },
    tags: ['LLM', 'OCR', 'Python', 'REST API'],
    accent: 'violet' as const,
  },
  {
    title: 'AI Sales Forecasting',
    description:
      'Прогнозирование продаж на основе 50+ факторов: сезонность, маркетинг, макро-показатели, когорты. Еженедельный автоматический прогноз.',
    metric: { value: 92, suffix: '%', prefix: '', label: 'точность прогноза' },
    tags: ['Time Series', 'Python', 'Power BI', 'DAX'],
    accent: 'cyan' as const,
  },
  {
    title: 'Self-Service BI',
    description:
      'Дашборды с natural language интерфейсом. Менеджеры задают вопросы на русском — получают визуализации и инсайты в реальном времени.',
    metric: { value: 40, suffix: '+', prefix: '', label: 'пользователей' },
    tags: ['Power BI', 'NLP', 'Claude AI', 'REST API'],
    accent: 'violet' as const,
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Кейсы трансформации"
          subtitle="Реальные проекты, измеримые результаты"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
              className="group gradient-border rounded-2xl p-7 flex flex-col"
            >
              {/* Accent line */}
              <div
                className={`h-1 w-12 rounded-full mb-6 ${
                  item.accent === 'cyan' ? 'accent-line-cyan' : 'accent-line-violet'
                }`}
              />

              <h3 className="text-lg font-display font-semibold mb-3 text-content-primary group-hover:text-white transition-colors duration-200">
                {item.title}
              </h3>

              <p className="text-sm text-content-secondary leading-relaxed mb-6 flex-1">
                {item.description}
              </p>

              {/* Metric */}
              <div className="mb-5">
                <AnimatedCounter
                  value={item.metric.value}
                  suffix={item.metric.suffix}
                  prefix={item.metric.prefix}
                />
                <p className="text-xs text-content-secondary mt-1.5 tracking-wide">
                  {item.metric.label}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] text-content-secondary border border-white/[0.06] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
