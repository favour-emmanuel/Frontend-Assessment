/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish"],
      },
      colors: {
        appLightGray: "#F5F4F8",
        appBlack: "#1C1F23",
        appDarkGray: "#252729",
      },
    },
  },
  plugins: [],
};
