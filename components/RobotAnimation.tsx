'use client';

import { motion } from 'framer-motion';

export function RobotAnimation() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto">
      {/* Glow backdrop */}
      <div
        className="absolute inset-[15%] rounded-full blur-[80px] opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(191,90,242,0.2) 60%, transparent 100%)',
        }}
      />

      <motion.svg
        viewBox="0 0 400 440"
        className="w-full h-full drop-shadow-2xl"
        fill="none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          {/* Eye glow filter */}
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-violet" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Head gradient */}
          <linearGradient id="head-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a3e" />
            <stop offset="100%" stopColor="#111127" />
          </linearGradient>
          <linearGradient id="visor-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,229,255,0.05)" />
            <stop offset="50%" stopColor="rgba(0,229,255,0.12)" />
            <stop offset="100%" stopColor="rgba(191,90,242,0.05)" />
          </linearGradient>
          <linearGradient id="body-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#151535" />
            <stop offset="100%" stopColor="#0e0e22" />
          </linearGradient>
        </defs>

        {/* === Background rings === */}
        {[170, 140, 110].map((r, i) => (
          <circle
            key={`ring-${i}`}
            cx="200" cy="210"
            r={r}
            stroke="#00e5ff"
            strokeWidth="0.5"
            opacity={0.04 + i * 0.02}
            strokeDasharray="6 8"
          />
        ))}

        {/* === Orbiting particles === */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '200px 210px' }}
        >
          <circle cx="200" cy="45" r="3" fill="#00e5ff" opacity="0.35" />
          <circle cx="355" cy="210" r="2" fill="#bf5af2" opacity="0.3" />
          <circle cx="200" cy="375" r="2.5" fill="#00e5ff" opacity="0.25" />
          <circle cx="45" cy="210" r="2" fill="#bf5af2" opacity="0.25" />
        </motion.g>

        {/* === Antenna === */}
        <line x1="200" y1="128" x2="200" y2="92" stroke="#00e5ff" strokeWidth="1.5" opacity="0.3" />
        <motion.circle
          cx="200" cy="86" r="6"
          fill="#bf5af2"
          filter="url(#glow-violet)"
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* === Head === */}
        <rect x="145" y="128" width="110" height="120" rx="28" fill="url(#head-grad)" />
        <rect x="145" y="128" width="110" height="120" rx="28" stroke="#00e5ff" strokeWidth="1" opacity="0.2" fill="none" />

        {/* Visor band */}
        <rect x="152" y="168" width="96" height="36" rx="10" fill="url(#visor-grad)" />

        {/* Scanline animation */}
        <motion.rect
          x="152" y="168"
          width="96" height="3"
          rx="1"
          fill="#00e5ff"
          opacity="0.06"
          animate={{ y: [168, 201, 168] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Eyes */}
        <motion.circle
          cx="178" cy="186" r="11"
          fill="#00e5ff"
          filter="url(#glow-cyan)"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="178" cy="186" r="5" fill="#ffffff" opacity="0.6" />

        <motion.circle
          cx="222" cy="186" r="11"
          fill="#00e5ff"
          filter="url(#glow-cyan)"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
        <circle cx="222" cy="186" r="5" fill="#ffffff" opacity="0.6" />

        {/* Mouth / speaker */}
        <rect x="186" y="222" width="28" height="5" rx="2.5" fill="#00e5ff" opacity="0.15" />

        {/* Side sensors */}
        <motion.line
          x1="143" y1="180" x2="122" y2="180"
          stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.25"
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.line
          x1="257" y1="180" x2="278" y2="180"
          stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.25"
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <line x1="143" y1="192" x2="128" y2="192" stroke="#bf5af2" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
        <line x1="257" y1="192" x2="272" y2="192" stroke="#bf5af2" strokeWidth="1" strokeLinecap="round" opacity="0.15" />

        {/* === Neck === */}
        <rect x="184" y="248" width="32" height="20" rx="6" fill="url(#body-grad)" stroke="#00e5ff" strokeWidth="0.8" opacity="0.8" />

        {/* === Body === */}
        <rect x="148" y="264" width="104" height="80" rx="16" fill="url(#body-grad)" />
        <rect x="148" y="264" width="104" height="80" rx="16" stroke="#00e5ff" strokeWidth="0.8" opacity="0.15" fill="none" />

        {/* Shoulder plates */}
        <rect x="138" y="268" width="14" height="30" rx="5" fill="url(#body-grad)" stroke="#00e5ff" strokeWidth="0.6" opacity="0.6" />
        <rect x="248" y="268" width="14" height="30" rx="5" fill="url(#body-grad)" stroke="#00e5ff" strokeWidth="0.6" opacity="0.6" />

        {/* Chest core */}
        <motion.circle
          cx="200" cy="302" r="8"
          fill="#00e5ff"
          filter="url(#glow-soft)"
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="200" cy="302" r="13" stroke="#00e5ff" strokeWidth="0.5" opacity="0.15" />

        {/* Chest circuit lines */}
        <path d="M168 285h18" stroke="#00e5ff" strokeWidth="0.8" opacity="0.12" />
        <path d="M214 285h18" stroke="#00e5ff" strokeWidth="0.8" opacity="0.12" />
        <path d="M168 320h64" stroke="#00e5ff" strokeWidth="0.6" opacity="0.08" />
        <path d="M175 330h50" stroke="#bf5af2" strokeWidth="0.5" opacity="0.08" />

        {/* === Arms === */}
        {/* Left arm */}
        <path
          d="M138 290l-22 18l-4 30"
          stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" fill="none"
        />
        <circle cx="112" cy="338" r="7" fill="url(#body-grad)" stroke="#00e5ff" strokeWidth="0.8" opacity="0.6" />
        <circle cx="112" cy="338" r="3" fill="#00e5ff" opacity="0.15" />

        {/* Right arm */}
        <path
          d="M262 290l22 18l4 30"
          stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" fill="none"
        />
        <circle cx="288" cy="338" r="7" fill="url(#body-grad)" stroke="#00e5ff" strokeWidth="0.8" opacity="0.6" />
        <circle cx="288" cy="338" r="3" fill="#00e5ff" opacity="0.15" />

        {/* === Floating data particles === */}
        {[
          { x: 80, y: 140, d: 0 },
          { x: 320, y: 160, d: 0.8 },
          { x: 90, y: 310, d: 1.5 },
          { x: 310, y: 290, d: 0.4 },
          { x: 120, y: 100, d: 2.0 },
          { x: 280, y: 110, d: 1.2 },
          { x: 70, y: 230, d: 0.6 },
          { x: 330, y: 240, d: 1.8 },
        ].map((p, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={p.x}
            cy={p.y}
            r={1.5 + (i % 3)}
            fill={i % 2 === 0 ? '#00e5ff' : '#bf5af2'}
            animate={{ y: [0, -15, 0], opacity: [0.15, 0.45, 0.15] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.d,
            }}
          />
        ))}

        {/* === Energy arcs === */}
        <motion.path
          d="M145 185 Q120 150 145 128"
          stroke="#00e5ff"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0, 0.2, 0], pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.path
          d="M255 185 Q280 150 255 128"
          stroke="#bf5af2"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          animate={{ opacity: [0, 0.2, 0], pathLength: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />
      </motion.svg>
    </div>
  );
}
