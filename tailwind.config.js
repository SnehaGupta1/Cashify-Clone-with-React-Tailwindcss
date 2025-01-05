/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-og': 'rgb(66 200 183)',
        'input-bg': '#e5e7eb',
        'input-bg1': 'rgb(247 247 247)',
      },
      fontWeight: {
        'mid-bold': '650',
      },
      height: {
        '90': '22rem',
      },
      fontSize: {
        '2.5xl': ['1.75rem', {
          lineHeight: '2.5rem',
          letterSpacing: '0.0em',
          fontWeight: '650',
        }],
      }
    },
  },
  plugins: [],
}

