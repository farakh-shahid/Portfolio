/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      bodyFont: ['Poppins', 'sans-serif'],
      titleFont: ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bodyColor: '#212428',
        lightText: '#c4cfde',
        boxBg: 'linear-gradient(145deg, #1e2024, #23272b)',
        designColor: '#ff014f',
      },
      boxShadow: {
        shadowOne: '0px 0px 0px #2a0c6199, 0px 0px 6px #2a0c6199',
      },
    },
  },
  plugins: [],
};
