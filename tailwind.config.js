export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mining-brown": "#8B4513",
        "ore-gold": "#D4AF37",
        copper: { 200: "#F1D2BC", 300: "#E3AE8A", 500: "#B8703F", 600: "#9E5A2E", 700: "#7F4724" },
      },
    },
  },
  plugins: [],
}
