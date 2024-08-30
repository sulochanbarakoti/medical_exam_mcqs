/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11806f",
      },
      backgroundImage: {
        background: "url('/src/assets/background.jpg')",
        background1: "url('/src/assets/background1.jpg')",
      },
    },
  },
  plugins: [],
};
