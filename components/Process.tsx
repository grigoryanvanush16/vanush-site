'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Аудит',
    description:
      'Анализ текущих процессов, данных и инфраструктуры. Нахожу точки, где AI даст максимальный ROI.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" strokeWidth="1.5">
        <circle cx="14" cy="14" r="10" className="stroke-accent-cyan/40" />
        <path d="M22 22l7 7" className="stroke-accent-cyan" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Стратегия',
    description:
      'Roadmap AI-трансформации: приоритеты, архитектура, ресурсы, сроки. Без воды, только конкретика.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" strokeWidth="1.5">
        <path d="M4 28L16 4l12 24" className="stroke-accent-violet/40" />
        <path d="M8 20h16" className="stroke-accent-violet" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Пилот',
    description:
      'Быстрый proof of concept за 2–4 недели. Проверяем гипотезу на реальных данных, измеряем эффект.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" strokeWidth="1.5">
        <path d="M6 16l8 8L26 8" className="stroke-accent-cyan" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Масштаб',
    description:
      'Production-grade внедрение: мониторинг, отказоустойчивость, обучение команды, передача знаний.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" strokeWidth="1.5">
        <path d="M16 4v24M4 16h24" className="stroke-accent-violet/40" />
        <path d="M8 8l16 16M24 8L8 24" className="stroke-accent-violet/20" />
        <circle cx="16" cy="16" r="6" className="stroke-accent-violet" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Как я работаю"
          subtitle="От первого разговора до работающей AI-системы"
        />

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+2.5rem)] right-[-1rem] h-px bg-gradient-to-r from-accent-cyan/20 to-accent-violet/20" />
              )}

              <div className="gradient-border rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {step.icon}
                  <span className="font-display text-3xl font-bold gradient-text">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-3 text-content-primary">
                  {step.title}
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
