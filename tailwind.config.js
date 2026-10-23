/* eslint-disable import/no-extraneous-dependencies, global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f7fc',
          100: '#e0f1fb',
          200: '#bae2f8',
          300: '#7cc7f2',
          400: '#38a8e8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        dark: {
          bg: '#06152b',
          card: '#091e38',
          border: '#143354',
          muted: '#7ca6ce',
          text: '#ffffff',
          deep: '#040e1e',
        },
        light: {
          bg: '#f0f7fc',
          card: '#ffffff',
          border: '#d5e7f5',
          borderStrong: '#b9d9f0',
          subtle: '#e8f3fc',
          text: '#091e36',
          muted: '#5a7894',
          secondary: '#1e3852',
          accent: '#0284c7',
          accentHover: '#0369a1',
        },
        ink: {
          950: '#05111f',
          900: '#091e36',
          800: '#122b45',
          700: '#1e3852',
          600: '#2c4c6e',
          500: '#43688c',
          400: '#5a7894',
          300: '#8ba7c2',
          200: '#b9d9f0',
          100: '#d5e7f5',
          50: '#f0f7fc',
        },
      },
      fontFamily: {
        sans: [
          '"Lay Grotesk"',
          '"Plus Jakarta Sans"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        serif: ['"Mazius Display"', '"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        wider: '0.1em',
        tightest: '-0.05em',
        tighter: '-0.03em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
