/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        twoCol: '910px',
        threeCol: '1168px',
        fourCol: '1426px',
        lgNav: '1195px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        lightBlue: {
          DEFAULT: '#b4cad8',
        },
        darkBlue: {
          DEFAULT: '#4b5b6e',
        },
        lightOrange: {
          DEFAULT: '#fbd99b',
        },
        brightYellow: {
          DEFAULT: '#efea46',
        },
        darkOrange: {
          DEFAULT: '#ebb429',
        },
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': {
            transform: 'translateY(-25%)'
          },
          '25%': {
            transform: 'translateY(10%)'
          },
          '50%': {
            transform: "translateY(0)"
          }
        },
        grow: {
          '0%': {
            transform: 'scale(0.5)'
          },
          '50%': {
            transform: 'scale(0.5)'
          }
        },
        spin: {
          '0%': {
            transform: 'rotate(180deg)'
          },
        }
      },
      animation: {
        bounce2: 'bounceOnce 0.5s',
        grow: 'grow 0.5s',
        spin: 'spin 0.5s'
      },
      width: {
        'largeBox': '800px'
      },
      margin: {
        'fromTop': '1'
      },
      boxShadow: {
        'profileBox': '0 8px 16px rgba(0, 0, 0, 0.2)'
      },
      dropShadow: {
        'titleShadow': '3px 3px #da9100'
      },
    },
  },
  safelist: [
    {
      pattern: /shadow-*/
    }
  ],
  plugins: [
  ],
}
