import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
      },

    },
  },
  plugins: [],
};

export default config; 