/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f11', // 深灰黑，比纯黑更有质感
        primary: '#e0e0e0', // 主文字色，柔和白
        secondary: '#a0a0a0', // 次要文字色，高级灰
        accent: '#d4d4d8', // 强调色，浅灰
        surface: '#18181b', // 表面色，深灰
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
