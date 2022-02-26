import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    common: {
      black: '#4a4a4a',
    },
    primary: {
      main: '#ea7f28',
      contrastText: '#fff',
    },
    divider: '#ededed',
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
          minWidth: 120,
          textTransform: 'none',
        },
      },
    },
  },
})
