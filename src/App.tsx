import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/system'
import { Header, Footer } from './components'
import { theme, AppContainer } from './lib'
import { Router } from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
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
