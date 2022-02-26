import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    common: {
      black: '#4a4a4a',
    },
    divider: '#ededed',
    primary: {
      main: '#ea7f28',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ededed',
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: 18,
    },
    caption: {
      fontSize: 14,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: 'none',
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: 128,
          height: 32,
          padding: 0,
          textTransform: 'none',
        },
      },
    },
  },
})
