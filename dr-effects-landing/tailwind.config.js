/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b35',
        'primary-dark': '#e55a2e',
        secondary: '#4ecdc4',
        accent: '#45b7d1',
        background: '#0d1117',
        surface: '#161b22',
        foreground: '#f0f6fc',
        muted: '#7d8590',
        border: '#30363d',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      spacing: {
        'pedal': '1.5rem',
        'chain': '2rem',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #ff6b35, 0 0 10px #ff6b35, 0 0 15px #ff6b35',
          },
          '100%': {
            boxShadow: '0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
      },
    },
  },
  plugins: [],
}