import { createTheme } from '@material-ui/core/styles';
import overrides from './overrides';
import colors from './colors';

// Create a theme instance.
const theme = createTheme({
  overrides: overrides.overrides,
  // Material UI theme
  breakpoints: {
    values: {
      xs: 0,
      sm: 577,
      md: 960,
      lg: 1230,
      xl: 1920,
    },
  },
  palette: {
    colors,
    common: {
      black: '#09223D',
      white: '#ffffff',
    },
    primary: {
      light: '#09223D',
      main: '#09223D',
      dark: '#09223D',
    },
    secondary: {
      main: '#09223D', // omitting light and dark will calculate from main
      contrastText: '#ffffff',
    },
    grey: {
      '500': '#bcbcbc',
      '700': '#79797a',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#008000',
    },
    error: {
      main: '#D83333',
    },
    text: {
      primary: '#09223D',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      // paper: '#fff',
      default: '#ffffff',
    },
    action: {
      disabled: '#fff',
      disabledBackground: '#566266',
      disabledOpacity: 1,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: [
      'SFRounded',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '4rem', // 64px
      fontWeight: 600,
      lineHeight: '72px',
    },
    h2: {
      fontSize: '2.125rem', // 34px
      fontWeight: 600,
      lineHeight: '42px',
    },
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 'bold',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 300,
      lineHeight: '28px',
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 300,
      lineHeight: '24px',
    },
    body2: {
      fontSize: '1rem', // 16px
      fontWeight: 300,
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: '0.875rem', // 14px
      fontWeight: 300,
    },
    caption: {
      fontSize: '0.8125rem',
      fontWeight: 300, // 13px
      lineHeight: '18px',
    },
  },
});

export default theme;
