module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  safelist: [
    'mb-8','text-primary', 'grid', 'flex', 'grow', 'w-64'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {content: ''},
            "code::after": {content: ''}
          }
        }
      },
      colors: {
        primary: "#004FFF",
        secondary: "#FFEE00",
        background: "#5ba9dd",
        third: "#74B2A1",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
