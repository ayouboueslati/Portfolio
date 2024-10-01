const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "// Adjust as needed\n    ./components/**/*.{js,ts,jsx,tsx}",
    "// Adjust as needed",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#yourPrimaryColor', // Define your primary color
        accent:'#3FE1A1',       

      },
    },
  },
  plugins: [nextui()],
};
