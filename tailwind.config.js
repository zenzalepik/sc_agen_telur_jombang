/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#F8F3EA',
          paper: '#FFFDF8',
          cream: '#EFE5D2',
          gold: '#B9872C',
          goldSoft: '#D8B46A',
          green: '#0F3B22',
          green2: '#184C2B',
          dark: '#1C1710',
          muted: '#6B6256'
        }
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        premium: '0 24px 70px rgba(28, 23, 16, 0.14)',
        soft: '0 14px 35px rgba(28, 23, 16, 0.08)'
      }
    }
  },
  plugins: [],
}
