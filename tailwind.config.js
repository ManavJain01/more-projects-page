/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    keyframes: {
      'bottom-transition': {
        '0%': { bottom: '-0.5rem' }, // -bottom-5
        '50%': { bottom: '-3rem' },   // -bottom-20
        '100%': { bottom: '-1.75rem', zIndex: '30' }, // -bottom-3
      },
      'bottom-transition-reverse': {
          '0%': { bottom: '-1.75rem', zIndex: '30' }, // -bottom-3 and change z-index
          '50%': { bottom: '-3rem' },   // -bottom-20
          '100%': { bottom: '-0.5rem' } // -bottom-5
        }
    },
    animation: {
      'bottom-transition': 'bottom-transition 1.5s ease-in-out forwards',
      'bottom-transition-reverse': 'bottom-transition-reverse 1.5s ease-in-out forwards'
    }
  },
  },
  plugins: [],
}