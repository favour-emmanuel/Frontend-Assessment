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
        appBlack: "#111111",
        appGreen: "#65B741",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-filters")],
};
