'use client';

import { motion } from 'framer-motion';

export function About() {
  const stats = [
    { value: '10+', label: 'источников данных' },
    { value: '12', label: 'AI-агентов' },
    { value: '100+', label: 'пользователей отчётности' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-8 inline-block">
              Обо мне
            </h2>

            <div className="space-y-4 text-content-secondary leading-relaxed">
              <p>
                Руководитель аналитики в SaaS-компании с десятью источниками данных
                и сотнями пользователей отчётности. Строю Data Warehouse, внедряю AI
                в бизнес-процессы, управляю командой аналитиков.
              </p>
              <p>
                Верю, что будущее аналитики — это AI-агенты, которые не просто
                показывают данные, а принимают решения. Каждый мой проект — шаг
                к полностью автономной аналитической системе.
              </p>
              <p>
                Не консультирую теоретически — строю руками. Каждый кейс
                в портфолио — это production-система, которая работает прямо сейчас.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/[0.06]">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-content-secondary mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decorative graphic — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="gradient-border rounded-2xl p-8 aspect-square flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full max-w-[280px]" fill="none">
                {/* Central hub */}
                <motion.circle
                  cx="100" cy="100" r="8"
                  className="fill-accent-cyan"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <circle cx="100" cy="100" r="18" className="stroke-accent-cyan/20" strokeWidth="0.8" />

                {/* Inner ring nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const r = 55;
                  const x = 100 + r * Math.cos((angle * Math.PI) / 180);
                  const y = 100 + r * Math.sin((angle * Math.PI) / 180);
                  return (
                    <g key={`inner-${i}`}>
                      <line
                        x1="100" y1="100" x2={x} y2={y}
                        className="stroke-white/[0.06]"
                        strokeWidth="0.5"
                      />
                      <circle
                        cx={x} cy={y} r="4"
                        className={i % 2 === 0 ? 'fill-accent-cyan/50' : 'fill-accent-violet/50'}
                      />
                    </g>
                  );
                })}

                {/* Outer orbit */}
                <circle cx="100" cy="100" r="82" className="stroke-white/[0.04]" strokeWidth="0.5" strokeDasharray="3 5" />

                {/* Outer nodes */}
                {[20, 80, 140, 200, 260, 320].map((angle, i) => {
                  const r = 82;
                  const x = 100 + r * Math.cos((angle * Math.PI) / 180);
                  const y = 100 + r * Math.sin((angle * Math.PI) / 180);
                  return (
                    <circle
                      key={`outer-${i}`}
                      cx={x} cy={y} r="2"
                      className="fill-white/[0.08]"
                    />
                  );
                })}

                {/* Cross connections */}
                {[
                  [0, 180],
                  [60, 240],
                  [120, 300],
                ].map(([a1, a2], i) => {
                  const r = 55;
                  const x1 = 100 + r * Math.cos((a1 * Math.PI) / 180);
                  const y1 = 100 + r * Math.sin((a1 * Math.PI) / 180);
                  const x2 = 100 + r * Math.cos((a2 * Math.PI) / 180);
                  const y2 = 100 + r * Math.sin((a2 * Math.PI) / 180);
                  return (
                    <line
                      key={`cross-${i}`}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      className="stroke-white/[0.03]"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
