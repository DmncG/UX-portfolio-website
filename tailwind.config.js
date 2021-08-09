const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rice: {
        light: '#F6F4E5',
        DEFAULT: '#F4F1DE',
        dark: '#AE9F3A',
      },
      terracota: {
        light: '#E89D88',
        DEFAULT: '#E07A5F',
        dark: '#87311A',
      },
      gunPowder: {
        light: '#616691',
        DEFAULT: '#3D405B',
        dark: '#1F202E',
      },
      peachOrange: {
        light: '#F5D8A9',
        DEFAULT: '#F2CC8F',
        dark: '#AB7114',
      },
      padua: {
        light: '#A0C5B3',
        DEFAULT: '#81B29A',
        dark: '#3A5F4D',
      },
      gray: colors.gray,
      coolGray: colors.coolGray,
      warmGray: colors.warmGray,
      red: colors.red,
      amber: colors.amber,
      yellow: colors.yellow,
      emerald: colors.emerald,
      rose: colors.rose,
      purple: colors.purple,
      white: colors.white,
    },
    fontFamily: {
      display: [
      'jost',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
      body: [
        'poppins',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      1000: 1000,
      1100: 1100,
      1200: 1200,
      1300: 1300,
      1400: 1400,
      1500: 1500,
      auto: 'auto',
    },
    extend: {
      backgroundImage: theme => ({
        'home-experience': "linear-gradient(to right bottom, rgba(242, 204, 143, 1), rgba(242, 204, 143, 1)), url('../../src/images/buyout_strandexterior3.jpg')",
        'home-about': "linear-gradient(to right bottom, rgba(224, 122, 95, 1), rgba(224, 122, 95, 1)), url('../../src/images/profile.jpg')",
      }),
      keyframes: {
        'line-extend': {
          '0%': { width: '0px', opacity: 0, height: '2px', position: 'absolute', 'background-color': '#E07A5F' },
          '100%': { width: '16px', opacity: 1 },
        },
        'fade': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1},
        },
      },
      animation: {
        'line-extend': 'line-extend 1s ease',
        'fade': 'fade 4s ease',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus', 'active'],
      display: ['hover', 'focus'],
    },
  },
  plugins: [],
}
