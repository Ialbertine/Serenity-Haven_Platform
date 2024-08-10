/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom screens
      screens: {
        'sm': '370px',
        'md': '768px',
        'lg': '1024px',
      },

      // Custom keyframes for bounce animation
      keyframes: {
        bounce: {
          '20%, 53%, 80%, from, to': {
            'animation-timing-function': 'cubic-bezier(.215, .61, .355, 1)',
            transform: 'translate3d(0, 0, 0)',
          },
          '40%, 43%': {
            'animation-timing-function': 'cubic-bezier(.755, .050, .855, .060)',
            transform: 'translate3d(0, -30px, 0)',
          },
          '70%': {
            'animation-timing-function': 'cubic-bezier(.755, .050, .855, .060)',
            transform: 'translate3d(0, -15px, 0)',
          },
          '90%': {
            transform: 'translate3d(0, -4px, 0)',
          },
        },
      },

      // Custom animation using the bounce keyframes
      animation: {
        bounce: 'bounce 2s infinite',
      },
      
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
