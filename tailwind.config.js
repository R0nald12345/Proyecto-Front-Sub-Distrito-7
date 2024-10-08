/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        primary:{
          100: "#0CA631",
          300: "#2BA007",
          900: "#1A5508",
        } 
      },
      fontFamily:{
        'new-font': ['Ubuntu', 'sans-serif'],
        suse: ['SUSE', 'sans-serif'],
      },
      fontWeight: {
        'new-bold': 700,
        'semi-bold': 650, // Agregar font-weight 690
      },
    },
  },
  plugins: [],
}

