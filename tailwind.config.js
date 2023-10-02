/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        moving: {
          "50%": { width: "100%" },
          "100%": { width: "0", right: "0", left: "unset" },
        },
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        kanit: ["kanit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
