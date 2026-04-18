'use client';

import { motion } from 'framer-motion';
import { Robot3D } from './Robot3D';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="gradient-mesh" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-24 pb-16 lg:pt-0 lg:pb-0">
        {/* Text column */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="gradient-border rounded-full px-6 py-2.5">
              <span className="text-xs font-mono tracking-[0.25em] text-accent-cyan uppercase">
                AI Transformer
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold leading-[0.85] tracking-tight"
          >
            <span className="block text-[clamp(2.2rem,5.5vw,6rem)] text-content-primary">
              VANUSH
            </span>
            <span className="block text-[clamp(2.2rem,5.5vw,6rem)] gradient-text pb-2">
              GRIGORYAN
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="h-px w-56 mx-auto lg:mx-0 my-7"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-violet), transparent)',
            }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-lg md:text-xl text-content-secondary max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
          >
            Превращаю хаос данных в&nbsp;AI&#8209;системы,
            <br className="hidden sm:block" />
            которые работают за&nbsp;вас
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <a
              href="#contact"
              className="glow-button inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Обсудить проект
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Robot column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <Robot3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border border-content-secondary/25 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
