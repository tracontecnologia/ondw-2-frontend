/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary-500': 'hsla(184, 99%, 18%, 1)',
        'brand-primary-400': 'hsla(184, 99%, 28%, 1)',
        'brand-primary-300': 'hsla(184, 99%, 38%, 1)',
        'brand-primary-200': 'hsla(184, 99%, 48%, 1)',
        'brand-primary-100': 'hsla(184, 99%, 58%, 1)',
        'brand-secondary-500': 'hsla(54, 97%, 28%, 1)',
        'brand-secondary-400': 'hsla(54, 97%, 38%, 1)',
        'brand-secondary-300': 'hsla(54, 97%, 48%, 1)',
        'brand-secondary-200': 'hsla(54, 97%, 58%, 1)',
        'brand-secondary-100': 'hsla(54, 97%, 68%, 1)',
        'feedback-success': '#00aa30',
        'feedback-warning': '#ffc737',
        'feedback-error': '#cc0000',
        'feedback-info': '#5df2fe',
      },
      backgroundImage: {
        logo: 'url(/img/billingyu-logo.svg)',
      },
    },
  },
  plugins: [],
};
