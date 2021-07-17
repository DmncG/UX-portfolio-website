const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  safeList: [
    'bg-padua',
    'bg-padua-dark',
    'bg-padua-light',
    'bg-terracota',
    'bg-terracota-dark',
    'bg-terracota-light',
    'bg-rice',
    'bg-rice-dark',
    'bg-rice-light',
    'bg-peachOrange',
    'bg-peachOrange-dark',
    'bg-peachOrange-light',
    'bg-gunPowder',
    'bg-gunPowder-dark',
    'bg-gunPowder-light',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rice: {
        light: '#F9F8EE',
        DEFAULT: '#F4F1DE',
        dark: '#AE9F3A',
      },
      terracota: {
        light: '#F0BEB0',
        DEFAULT: '#E07A5F',
        dark: '#87311A',
      },
      gunPowder: {
        light: '#9497B8',
        DEFAULT: '#3D405B',
        dark: '#1F202E',
      },
      peachOrange: {
        light: '#F8E5C6',
        DEFAULT: '#F2CC8F',
        dark: '#AB7114',
      },
      padua: {
        light: '#C0D8CC',
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
    extend: {
      backgroundImage: theme => ({
        'home-experience': "linear-gradient(to right bottom, rgba(242, 204, 143, 1), rgba(242, 204, 143, 1)), url('../../src/images/buyout_strandexterior3.jpg')",
        'home-about': "linear-gradient(to right bottom, rgba(224, 122, 95, 1), rgba(224, 122, 95, 1)), url('../../src/images/profile.jpg')",
      })
    },
  },
  variants: {
    extend: {
      animation: ['hover, focus, active']
    },
  },
  plugins: [],
}
