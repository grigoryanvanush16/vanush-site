'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const categories = [
  {
    title: 'Данные',
    items: ['PostgreSQL', 'MSSQL', 'MySQL', 'dbt', 'Airflow', 'ETL/ELT'],
  },
  {
    title: 'AI & ML',
    items: ['Claude AI', 'LLMs', 'Python', 'scikit-learn', 'NLP', 'RAG'],
  },
  {
    title: 'Визуализация',
    items: ['Power BI', 'DAX', 'TMDL/PBIP', 'Report Server'],
  },
  {
    title: 'Инфраструктура',
    items: ['MCP Servers', 'REST API', 'Git', 'Docker', 'Linux', 'tmux'],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Технологии"
          subtitle="Инструменты, которые я использую каждый день"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xs font-mono text-accent-cyan tracking-[0.2em] uppercase mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      scale: 1.06,
                      borderColor: 'rgba(0, 229, 255, 0.25)',
                      color: '#e4e4ed',
                    }}
                    className="text-sm px-3.5 py-2 rounded-xl bg-bg-card/50 text-content-secondary border border-white/[0.06] transition-colors cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
