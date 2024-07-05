/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainYellow: "#E1C01A",
        mainGray: "#F5F7F8",
        mainGreen: "#379777",
        mainDark: "#242424",
      },
    },
  },
  plugins: [],
};
