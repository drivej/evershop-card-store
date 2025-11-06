/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // EverShop scans components automatically, but add if needed for custom paths
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.{scss,css}'  // Include if using custom SCSS
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],  // For your Google Font example
        // Add more custom fonts here
      },
    //   colors: {
    //     primary: '#your-color-hex',
    //     // Custom colors, etc.
    //   },
      // Add spacing, breakpoints, plugins, etc.
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), etc. if needed
  ],
};