// import type { Config } from "tailwindcss";

import { Component } from "react";
import { keyframes } from "styled-components";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

/** @type {import('tailwindcss').config} */
module.exports = {
  darkMode:["class"],
  content: [
    './pages/**/*.{js.jsx}',
    './components/**/*/{js.jsx}',
    './app/**/*.{js.jsx}',
    './src/**/*.{js.jsx}',
  ],
  prefix:"",
  theme:{
    container:{
      center:true,
      padding:"15px",
      screens:{
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
      },
      fontFamily:{
        primary:"var(--font-jetbrainsMono)",
      },
    },
    extend:{
      keyframes: {
        "accordion-down":{
          from: {height : "0"},
          to:{height:"var(--radix-accordion-content-height)"},
        },
        "accordion-up":{
          from:{height:"var(--radix-accordion-content-height)"},
          to:{height:"0"},
        },
      },
      animation:{

      }
    }
  }
}