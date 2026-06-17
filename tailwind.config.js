/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ecos: {
          bg:      '#F2FFEB',
          bright:  '#43D300',
          lime:    '#4BED07',
          dark:    '#195400',
          darker:  '#154800',
        },
      },
      fontFamily: {
        condensed: ['"TT Hoves Pro"', 'sans-serif'],
        sans:      ['"TT Hoves Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
