import { BrowserRouter } from 'react-router-dom'
import { Header, Footer } from './components'
import { theme, AppContainer, Main } from './lib'
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

        <Main>
          <Router />
        </Main>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
