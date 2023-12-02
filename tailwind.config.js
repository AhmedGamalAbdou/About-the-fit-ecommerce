/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        openmenu: "openmenu 1s ease-in-out",
        opencart: "opencart 0.2s ease-in",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { top: "0px" },
          // final position
          "100%": { bottom: "600px" },
        },
        opencart: {
          // initial position
          "0%": { right: "-250px" },

          // final position
          "100%": { right: "0px" },
        },
      },
    },
  },
  plugins: [],
};
