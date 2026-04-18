'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const problems = [
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" strokeWidth="1.5">
        <rect x="6" y="6" width="36" height="36" rx="4" className="stroke-accent-cyan/40" />
        <line x1="6" y1="18" x2="42" y2="18" className="stroke-accent-cyan/20" />
        <line x1="18" y1="18" x2="18" y2="42" className="stroke-accent-cyan/20" />
        <circle cx="30" cy="30" r="3" className="fill-accent-cyan/15 stroke-accent-cyan" />
        <path d="M12 24h3M12 30h3M12 36h3" className="stroke-content-secondary" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Ручная отчётность',
    description:
      'Аналитики тратят 80% времени на сбор данных вместо анализа. Каждый отчёт — это день ручной работы.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" strokeWidth="1.5">
        <circle cx="15" cy="15" r="9" className="stroke-accent-violet/40" />
        <circle cx="33" cy="15" r="9" className="stroke-accent-cyan/40" />
        <circle cx="24" cy="31" r="9" className="stroke-accent-pink/40" />
        <path d="M21 17l3 10M27 17l-3 10" className="stroke-content-secondary/40" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'Разрозненные данные',
    description:
      '10 систем, 10 версий правды. Ни одна не полная. Решения принимаются вслепую.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" className="stroke-accent-cyan/25" />
        <path d="M24 12v12l8 8" className="stroke-accent-cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2.5" className="fill-accent-cyan" />
      </svg>
    ),
    title: 'Медленные решения',
    description:
      'Пока собрали отчёт — данные устарели, момент упущен. Бизнес не ждёт.',
  },
];

export function Problems() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Знакомые проблемы?"
          subtitle="Если хотя бы одна — у вас есть пространство для AI-трансформации"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="gradient-border rounded-2xl p-8"
            >
              <div className="mb-6">{problem.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 text-content-primary">
                {problem.title}
              </h3>
              <p className="text-content-secondary leading-relaxed text-[15px]">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
