const { transform } = require('@parcel/rust');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        'md': '768px',
        // 'xxxs': '280px',
        'xxs' : '396px',
        'xs': '546px',
        'mbl-lg' : {'raw': '((min-height: 872px) and (max-width: 1024px))'},
        'portrait': {'raw': '(min-height: 872px)'}
      },
      spacing: {
        '17': '4.25rem'
      },
      fontFamily: {
        'jktsans' : '"Plus Jakarta Sans", Roboto, Arial, sans-serif',
      },
      colors: {
        'main-color' : 'rgb(var(--main-theme)/ <alpha-value>)',
        'second-color' : 'rgb((var(--second-theme)/ <alpha-value>))'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)'},
          '12%': { transform: 'rotate(5deg)'},
          '25%': { transform: 'rotate(-5deg)'},
          '50%': { transform: 'rotate(5deg)'},
          '100%': {transform: 'rotate(0)'}
        },
        'slide-f-r':{
          '0%': { translate: '100% 0' },
          '100%': { translate: '0' }
        },
        'slide-f-br' : {
          '0%': { translate: '100% 100%' },
          '100%': { translate: '0' }
        },
        'float-f-b' : {
          '0%': { translate: '0 50%', opacity: '0' },
          '100%': { translate: '0', opacity: '1' }
        },
        'ring-pulse' : {
          '0%' : {boxShadow : 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(239, 68, 68, 0.15) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px'}
        }
      },
      animation: {
        wiggle: 'wiggle 1s linear 2',
        "slide-f-r": 'slide-f-r 1s ease-out',
        "slide-f-br": 'slide-f-br 1s ease-in-out',
        'float-f-b': "float-f-b 1s ease-out",
        'ring-pulse': 'ring-pulse 1.5s ease-in-out infinite'
      }
    },
  plugins: [],
  }
}
