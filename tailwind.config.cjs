/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cg_font_primary_regular: ["Euclid Circular A Regular"],
        cg_font_primary_bold: ["Euclid Circular A Bold"],
        cg_font_primary_semibold: ["Euclid Circular A Semibold"],
        cg_font_primary_bold_italic: ["Euclid Circular A Bold Italic"],
      },
      colors: {
        cg_color_primary: "#252525",
      },
    },
  },
  plugins: [],
};
