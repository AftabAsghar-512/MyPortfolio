/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          dark: "#3B2314",      // Deep Rich Espresso Brown
          primary: "#5C3A21",   // Main Warm Dark Brown from CV
          secondary: "#8C5A35", // Mid Bronze/Caramel Brown
          accent: "#C68B59",    // Warm Amber/Gold Accent
          surface: "#FDFBF7",   // Soft Ivory White Background
          beige: "#F4EDE4",     // Warm Beige Accent Card
          sand: "#E8DDD0",      // Light Sand Border & Accent
          muted: "#7A685B",     // Muted Warm Gray/Brown Text
          card: "#FFFFFF",      // Pure White Card
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(92, 58, 33, 0.12)',
        'warm-lg': '0 20px 40px -15px rgba(92, 58, 33, 0.18)',
        'warm-glow': '0 0 25px rgba(198, 139, 89, 0.25)',
      }
    },
  },
  plugins: [],
}
