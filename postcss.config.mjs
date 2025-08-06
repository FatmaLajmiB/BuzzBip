// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // This is the correct plugin for Tailwind CSS v4
    'autoprefixer': {}, // Good practice to include for vendor prefixes
  },
};