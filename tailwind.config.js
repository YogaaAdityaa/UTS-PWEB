import defaultTheme from 'tailwindcss/defaultTheme';
        module.exports = {
          theme: {
            extend: {
              fontFamily: {
                serif: ['"Noto Serif"', ...defaultTheme.fontFamily.serif], 
              }
            }
          }
        }

        module.exports = {
            theme: {
              fontFamily: {
                'noto-serif': ['"Noto Serif"', 'serif'],
              }
            }
          }