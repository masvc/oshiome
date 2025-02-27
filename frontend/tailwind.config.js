/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oshi-pink': '#ffb7dc',
        'oshi-purple': '#a78eff',
        'oshi-indigo': '#4f46e5',
      },
      backgroundImage: {
        'gradient-oshi': 'linear-gradient(135deg, #fff6f9 0%, #ffe6f6 100%)',
      },
    },
  },
  plugins: [],
};
