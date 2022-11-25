/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      pro: "389px",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/forms"),
  ],
};
