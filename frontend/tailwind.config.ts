/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // content: [
  //   './src/app/**/*.{js,ts,jsx,tsx}',
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  //   './src/pages/**/*.{js,ts,jsx,tsx}',
  //   './src/features/**/*.{js,ts,jsx,tsx}',
  //   './src/**/*.{js,ts,jsx,tsx}',
  // ],
  theme: {
    extend: {},
    fontFamily: {
      // satoshi: ['Satoshi', 'sans-serif'],
      // inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};

export default config;
