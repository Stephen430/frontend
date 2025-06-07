/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f54748",
        secondary: "#4a6b6f",
        accent: "#0fe355",
        light: "#f9fafb",
        dark: "#1e293b",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        'custom': '0 10px 25px rgba(0, 0, 0, 0.08)',
        'hover': '0 15px 35px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
