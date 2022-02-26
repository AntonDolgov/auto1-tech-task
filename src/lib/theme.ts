import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ea7f28',
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
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
