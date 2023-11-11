/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2rem',
        lg: '4rem',
        xl: '3.3rem',
      }
    }
  },
  // corePlugins: {
  //   container: false
  // },
  // plugins: [
  //   function ({ addComponents }) {
  //     addComponents({
  //       '.container': {
  //         marginInline: auto,
  //         maxWidth: '100%',
  //         '@screen sm': {
  //           maxWidth: '540px',
  //         },
  //         '@screen md': {
  //           maxWidth: '700px',
  //         },
  //         '@screen lg': {
  //           maxWidth: '800px',
  //         },
  //         '@screen xl': {
  //           maxWidth: '900px',
  //         },
  //       }
  //     })
  //   }
  // ]
}