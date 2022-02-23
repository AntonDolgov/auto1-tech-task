import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ea7f28',
      contrastText: '#fff',
    },
  },
  typography: {
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
