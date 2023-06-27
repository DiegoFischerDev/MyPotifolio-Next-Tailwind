/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#efefef",
        primary: "#f25a1a", // 240,86,199 // #ff9a3b // #B63E96 // #f25a1a
        primaryDark: "#11d0f1", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #efefef 5px, #efefef 100px);',
        circularDark: 'repeating-radial-gradient(#efefef 1px, #1b1b1b 5px, #1b1b1b 100px);',
      }
    },
  },
  plugins: [],
}
