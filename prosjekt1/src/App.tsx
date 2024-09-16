import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SwiperPage from './pages/swiperPage'

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
        <SwiperPage/>
      </QueryClientProvider>
  )
}

export default App
