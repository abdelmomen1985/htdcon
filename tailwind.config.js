/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rightLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' },
        },
        spinInPlace: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        keyframes: {
        rotateX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
      },
      },
      animation: {
        upDown: 'upDown 3s ease-in-out infinite',
        rightLeft: 'rightLeft 3s ease-in-out infinite',
        spinInPlace: 'spinInPlace 5s linear infinite',
        rotateX: 'rotateX 2s linear infinite',
      },
    },
  },
  plugins: [],
}

