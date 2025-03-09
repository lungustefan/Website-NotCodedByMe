/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Alexandria, sans-serif'],
      serif: ['Crimson Pro, serif'],
      mono: ['"Reddit Mono", monospace']
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
    },
    extend: {
      colors: {
        rbase: '#191724',
        rsurface: '#1f1d2e',
        roverlay: '#26233a',
        rmuted: '#6e6a86',
        rsubtle: '#908caa',
        rtext: '#e0def4',
        rlove: '#eb6f92',
        rgold: '#f6c177',
        rrose: '#ebbcba',
        rpine: '#31748f',
        rfoam: '#9ccfd8',
        riris: '#c4a7e7',
        rhighlightl: '#21202e',
        rhighlightm: '#403d52',
        rhighlighth: '#524f67'
      },
    },
  },
  plugins: [],
}
