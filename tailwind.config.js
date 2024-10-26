/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        box: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        me: '0 0 40px rgba(0, 0, 0, 0.2)',
      },
      letterSpacing: {
        'wide-10': '10px',
      },
      gridTemplateColumns: {
        'two-col': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
};
