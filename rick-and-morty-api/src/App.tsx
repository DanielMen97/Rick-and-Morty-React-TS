import Home from './components/home'
import { GlobalContextProvider } from './context/globalContext'

function App() {

  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  )
}

export default App
