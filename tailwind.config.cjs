/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        mainColor: "#D42527",
        mainHoverColor: "#F05252",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
