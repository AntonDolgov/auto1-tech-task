import { BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './components'
import { theme, AppContainer } from './lib'
import { Router } from './router'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={({ palette }) => ({
          body: {
            color: palette.common.black,
          },
          button: {
            fontSize: 'inherit',
          },
        })}
      />

      <BrowserRouter>
        <Header />

        <AppContainer maxWidth="lg">
          <Router />
        </AppContainer>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
