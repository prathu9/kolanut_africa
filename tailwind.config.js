/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-red": "#AF060D",
        "custom-grey": "#2E3342"
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        }
      },
      animation: {
        fadeIn: 'fadeIn 150ms 2s ease-in forwards'
      }
    },
  },
  plugins: [],
};
