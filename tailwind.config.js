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
        "gradient-1": "linear-gradient(91.94deg, rgba(235, 239, 252, 0.22) 32.45%, rgba(228, 235, 253, 0.94) 75.82%)",
        "step-gradient-1": "linear-gradient(91.94deg, rgba(235, 252, 240, 0.22) 32.45%, rgba(228, 253, 235, 0.94) 75.82%)",
        "step-gradient-2": "linear-gradient(91.94deg, rgba(244, 235, 252, 0.22) 32.45%, rgba(246, 228, 253, 0.94) 75.82%)",
        "step-gradient-3":"linear-gradient(91.94deg, rgba(235, 239, 252, 0.22) 32.45%, rgba(228, 235, 253, 0.94) 75.82%)"
      },
      colors: {
        "custom-red": "#AF060D",
        "custom-grey": "#2E3342"
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        colorChange: {
          '0%': {color: "#AF060D"},
          '25%': {color: "#AF060D"},
          '26%': {color: "#2E3342"},
          '100%': {color: "#2E3342"}
        },
        showAndHide: {
          '0%': {visibility: "visible"},
          '25%': {visibility: "visible"},
          '26%': {visibility: "hidden"},
          '100%': {visibility: "hidden"}
        }
      },
      animation: {
        fadeIn: 'fadeIn 150ms 2s ease-in forwards',
      }
    },
  },
  plugins: [],
};
