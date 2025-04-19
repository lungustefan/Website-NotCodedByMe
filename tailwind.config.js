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
        rbase: '#26221f',         // background
        rsurface: '#2e2a26',      // slightly lighter background
        roverlay: '#3a3530',      // overlay panels
        rmuted: '#a89f95',        // muted elements (borders, hints)
        rsubtle: '#bfb5a9',       // subtle text
        rtext: '#d2c8bc',         // main text
        rlove: '#d7c0a4',         // accent (underline, highlights)
        rgold: '#e0c090',         // secondary highlight
        rrose: '#debdb6',         // soft rose/pink
        rpine: '#768179',         // soft forest green
        rfoam: '#9fb8b4',         // cool blue/teal
        riris: '#c1b0d0',         // soft purple
        rhighlightl: '#302c28',   // low highlight
        rhighlightm: '#3f3a36',   // medium highlight
        rhighlighth: '#d7c0a4',   // high contrast highlight (underline)
      },
    },
  },
  plugins: [],
        }
