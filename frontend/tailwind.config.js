/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oshi-pink': '#FF69B4',
        'oshi-purple': '#9B6B9E',
        'oshi-indigo': '#4f46e5',
      },
      backgroundImage: {
        'gradient-oshi': 'linear-gradient(135deg, #fff6f9 0%, #ffe6f6 100%)',
      },
      fontFamily: {
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
