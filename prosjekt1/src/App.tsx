import './styles/App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SwipePage from './pages/swipePage'
import ListViewPage from './pages/listViewPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';

const queryClient = new QueryClient()

function App() {

  const baseUrl: string = "/project1";

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
            <Routes>
            <Route path={baseUrl + "/"} element={<Layout content={<SwipePage/>}/>} />
            <Route path={baseUrl + "/listViewPage"} element={<Layout content={<ListViewPage/>}/>} />
            </Routes>
        </Router>
      </QueryClientProvider>
    </>
    );
  }

export default App
