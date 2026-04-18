import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#06060e',
          secondary: '#0c0c1a',
          card: '#111127',
        },
        accent: {
          cyan: '#00e5ff',
          violet: '#bf5af2',
          pink: '#f472b6',
        },
        content: {
          primary: '#e4e4ed',
          secondary: '#6b6b8a',
        },
      },
      fontFamily: {
        display: ['var(--font-unbounded)'],
        body: ['var(--font-manrope)'],
        mono: ['var(--font-jetbrains)'],
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'mesh-move': 'meshMove 20s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        meshMove: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(5%, -5%) rotate(1deg) scale(1.02)' },
          '50%': { transform: 'translate(-3%, 3%) rotate(-1deg) scale(0.98)' },
          '75%': { transform: 'translate(3%, 5%) rotate(0.5deg) scale(1.01)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
