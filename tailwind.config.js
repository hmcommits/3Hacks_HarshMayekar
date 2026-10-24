/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFF6F2',
          100: '#FFEBD9',
          200: '#FFD3B3',
          300: '#FFAF80',
          400: '#FF8A50',
          500: '#FF6B35',
          600: '#E8531D',
          700: '#C23D10',
          800: '#9B300E',
          900: '#7E2A10',
        },
        secondary: {
          DEFAULT: '#0B4F6C',
          50: '#F0F7FA',
          100: '#DBEDF4',
          200: '#B8DCF0',
          300: '#84C4E1',
          400: '#48A5CE',
          500: '#1F85B2',
          600: '#0B4F6C',
          700: '#0B435C',
          800: '#0D384D',
          900: '#102F41',
        },
        accent: {
          DEFAULT: '#FFB627',
          50: '#FFFDF0',
          100: '#FFF9D1',
          200: '#FFF2A3',
          300: '#FFE766',
          400: '#FFD633',
          500: '#FFB627',
          600: '#E09514',
          700: '#B26F0B',
          800: '#8E550E',
          900: '#754510',
        },
        success: '#22C55E',
        surface: '#FAFAF7',
        dark: '#1A0A00',
        card: '#FFFFFF',
        textDark: '#2D1B00',
        textMuted: '#6B6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(26, 10, 0, 0.06)',
        'elevated': '0 10px 30px -4px rgba(26, 10, 0, 0.12)',
        'glow-primary': '0 0 25px rgba(255, 107, 53, 0.35)',
      }
    },
  },
  plugins: [],
}
