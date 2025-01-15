import { createTheme, Theme } from '@mui/material/styles';

// Define common variables for light and dark themes
const commonThemeConfig = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

// Light Theme
export const lightTheme: Theme = createTheme({
  ...commonThemeConfig,
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50', // todo-green
    },
    secondary: {
      main: '#FF9800', // todo-orange
    },
    error: {
      main: '#F44336', // todo-red
    },
    text: {
      primary: '#212121', // text-primary
      secondary: '#757575', // text-secondary
    },
    background: {
      default: '#F5F5F5', // background
      paper: '#EEEEEE', // footer-background
    },
    divider: '424242', // Color del texto del footer
    action: { 
      hover: '#d0d0d0', 
      active: '#43b0f1' 
    },
  },
  
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#212121', // text-primary
        },
      },
    },
  },
});

// Dark Theme
export const darkTheme: Theme = createTheme({
  ...commonThemeConfig,
  palette: {
    mode: 'dark',
    primary: {
      main: '#81C784', // todo-green
    },
    secondary: {
      main: '#FFB74D', // todo-orange
    },
    error: {
      main: '#E57373', // todo-red
    },
    text: {
      primary: '#E0E0E0', // text-primary
      secondary: '#BDBDBD', // text-secondary
    },
    background: {
      default: '#121212', // background
      paper: '#1E1E1E', // footer-background
    },
    divider: '#E0E0E0', // Color del texto del footer
    action: { 
      hover: '#0a0a0a', 
      active: '#73bbee', 
    },
  }, 
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#E0E0E0', // text-primary
        },
      },
    },
  },
});
