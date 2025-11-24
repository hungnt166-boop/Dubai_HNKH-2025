/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dubai: {
          bg: '#0f172a', // Slate 900
          card: '#1e293b', // Slate 800
          gold: '#D4AF37', // Metallic gold
          gold_hover: '#b5952f',
          gold_light: '#F8E796',
          accent: '#c05621', 
          text: '#f1f5f9', // Slate 100
          text_muted: '#94a3b8', // Slate 400
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}