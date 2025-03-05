/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8E44AD',
          dark: '#7D3C98',
          light: '#A569BD',
        },
        secondary: {
          DEFAULT: '#2ECC71',
          dark: '#27AE60',
          light: '#58D68D',
        },
        accent: {
          DEFAULT: '#E74C3C',
          dark: '#C0392B',
          light: '#F1948A',
        },
        highlight: {
          DEFAULT: '#F1C40F',
          dark: '#F39C12',
          light: '#F4D03F',
        },
        neutral: {
          light: '#F8F9FA',
          DEFAULT: '#E9ECEF',
          dark: '#DEE2E6',
        },
      },
      spacing: {
        'section': '5rem',
        'container': '1200px',
        'header': '4rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'bold': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}; 