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
        primaryDark: "#00B0FF", // 80,230,217
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #efefef 5px, #efefef 100px)",
    
        circularDark:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 6px,#1b1b1b 8px,#1b1b1b 100px)",
    
        circularLightLg:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #efefef 5px, #efefef 80px)",
    
        circularDarkLg:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 6px,#1b1b1b 8px,#1b1b1b 80px)",
    
        circularLightMd:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #efefef 5px, #efefef 60px)",
    
        circularDarkMd:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 6px,#1b1b1b 8px,#1b1b1b 60px)",
    
        circularLightSm:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #efefef 5px, #efefef 40px)",
    
        circularDarkSm:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 6px,#1b1b1b 8px,#1b1b1b 40px)",
    },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'desktop': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'laptop': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'tablet': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'mobile': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
