import { Header } from './components'
import { ThemeProvider } from '@mui/system'
import { theme, AppContainer } from './lib'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <AppContainer maxWidth="lg">dfd</AppContainer>
    </ThemeProvider>
  )
}

export default App
