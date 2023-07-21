/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      
      screens: {
        '4xl': '3000px',
      },

      animation: {
        rainbowtext: 'text 5s ease infinite',
      },


      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },

        
      },
    }
  },
  plugins: [],
}