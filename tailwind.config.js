/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-rubik)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
      },
    },
  },
  plugins: [],
};
