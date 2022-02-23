import { Header, Footer } from './components'
import { ThemeProvider } from '@mui/system'
import { theme, AppContainer } from './lib'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <AppContainer maxWidth="lg">dfd</AppContainer>

      <Footer />
    </ThemeProvider>
  )
}

export default App
