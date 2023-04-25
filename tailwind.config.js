/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blue-background': "url('/public/images/background.jpg')",
      },
      dropShadow: {
        'image-shadow': '14px 14px 56px  rgba(0,0,0,0.57)',
      },
    },
  },
  plugins: [],
};
