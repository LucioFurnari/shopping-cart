/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/background.jpg')",
      },
      keyframes: {
        seeDescription: {
          '0%': { height: 0 },
          '100%': { height: '100%'},
        }
      },
      animation: {
        seeDescription: 'seeDescription 1s ease-in-out 0s forwards',
      }
    },
  },
  plugins: [],
}

