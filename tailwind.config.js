/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-bg)',
          secondary: 'var(--color-bg-secondary)',
        },
        accent: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
        },
        text: {
          base: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
        },
        dark: {
          base: 'var(--color-dark)',
          invert: 'var(--color-light)',
          1: 'var(--color-dark-1)',
          2: 'var(--color-dark-2)',
          3: 'var(--color-dark-3)',
        },
      },
    },
  },
  plugins: [],
};
