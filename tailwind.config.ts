import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'; // Для backdrop-blur

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./src/app/**/sections/*.{js,ts,jsx,tsx,mdx,html}"
  ],
  theme: {
    extend: {
      // --- Цвета ---
      colors: {
        'custom-beige': 'rgba(210,182,177,1)',
        'custom-dark': '#0A0A0A'
      },
      
      // --- Шрифты ---
      fontFamily: {
        'roboto-l': ['RobotoL'],
        'gotham-light': ['Gothamlight'],
        'zen-antique': ['ZenAntique'],
        'zen-antiquie': ['ZenAntoquie']
      },
      
      // --- Размеры текста ---
      fontSize: {
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '26': '26px',
        '30': '30px',
        '35': '35px',
        '37': '37px',
        '38': '38px',
        '70': '70px'
      },
      
      // --- Радиус углов ---
      borderRadius: {
        '10': '10px',
        '12': '12px',
        '15': '15px'
      },
      
      // --- Размеры блоков ---
      width: {
        '1249px': '1249px'
      },
      height: {
        '580px': '580px',
        '586px': '586px'
      },
      
      // --- Интервалы ---
      letterSpacing: {
        '2': '2px'
      },
      lineHeight: {
        '39': '39px',
        '5': '1.25rem'
      },
      
      // --- Анимации и keyframes ---
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '25%': { opacity: '.25' },
          '50%': { opacity: '.5' },
          '75%': { opacity: '.75' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.backdrop-blur-sm': {
          backdropFilter: 'blur(4px)'
        },
        '.backdrop-blur-md': {
          backdropFilter: 'blur(12px)'
        }
      });
    })
  ]
};

export default config;