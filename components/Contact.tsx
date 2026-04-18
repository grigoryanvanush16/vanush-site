'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/[0.025] to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Давайте создадим</span>
            <br />
            <span className="gradient-text">что-то выдающееся</span>
          </h2>

          <p className="text-lg text-content-secondary mb-12 max-w-md mx-auto">
            Готовы начать AI-трансформацию?
            <br />
            Напишите — обсудим ваш кейс.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/vanush_grigoryan"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.44-.751-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141a.506.506 0 01.171.325c.016.093.036.306.02.472z" />
              </svg>
              Telegram
            </a>

            <a
              href="mailto:grigoryanvanush16@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-content-primary font-semibold text-sm tracking-wide hover:border-accent-cyan/30 hover:bg-white/[0.04] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
