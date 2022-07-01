/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: [
          "Menlo",
          "Monaco",
          '"Lucida Console"',
          '"Liberation Mono"',
          '"DejaVu Sans Mono"',
          '"Bitstream Vera Sans Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
