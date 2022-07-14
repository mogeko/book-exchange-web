/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "c-lg": "976px",
      },
      flexBasis: {
        "5/7": "71.42857143%",
        "2/7": "28.57142857%",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["emerald", "dracula"],
    darkTheme: "dracula",
  },
};
