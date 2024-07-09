/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dis/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'back-image': "url('img/test.jpg')",
      },
    },
  },
  plugins: [],
}

