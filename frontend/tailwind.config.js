
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mvw: {
          primary: "#0b1736",
          accent: "#1e90ff"
        }
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      boxShadow: {
        mvw: '0 10px 30px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
};
