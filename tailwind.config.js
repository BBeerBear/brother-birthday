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
        mybg: "url('/src/assets/bg2.jpg')",
        mytv: "url('/src/assets/oldtv.png')",
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(100%) translateY(0%)' },
          '10%': { transform: 'translateX(90%) translateY(20%)' },
          '20%': { transform: 'translateX(80%) translateY(0%)' },
          '40%': { transform: 'translateX(60%) translateY(20%)' }, // 第一次向上跳跃
          '50%': { transform: 'translateX(50%) translateY(0)' }, // 回到原地
          '60%': { transform: 'translateX(40%) translateY(20%)' }, // 第二次向上跳跃
          '70%': { transform: 'translateX(30%) translateY(0)' }, // 回到原地
          '80%': { transform: 'translateX(15%) translateY(20%)' },
          '90%': { transform: 'translateX(0%) translateY(0)' },
          '100%': { transform: 'translateX(-20%) translateY(20%)' },
        },
      },
      animation: {
        move: 'move 10s infinite linear',
      },
    },
  },
  plugins: [],
};
