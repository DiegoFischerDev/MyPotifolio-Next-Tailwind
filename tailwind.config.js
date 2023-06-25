/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#e0e0e0",
        primary: "#f25a1a", // 240,86,199 // #ff9a3b // #B63E96 // #f25a1a
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #e0e0e0 5px, #e0e0e0 100px);',
      }
    },
  },
  plugins: [],
}
