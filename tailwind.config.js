module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "650px",
      //=> @media (min-width: 640px){...}

      md: "760px",

      lg: "1024px",

      xl: "1280px",
      
      "2xl": "1536",
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
