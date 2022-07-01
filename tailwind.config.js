module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "invalid"],
    borderColor: ["responsive", "hover", "focus", "invalid"],
  },
  plugins: [require("tailwindcss-invalid-variant-plugin") ,require('tailwind-scrollbar')],
  
}
