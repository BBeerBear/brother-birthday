/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        zcool: ['ZCOOL KuaiLe', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        mybg: "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
