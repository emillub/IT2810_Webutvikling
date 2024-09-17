import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import swipePage from './pages/swipePage'
import ListViewPage from './pages/listViewPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';

const queryClient = new QueryClient()

function App() {

  const baseUrl: string = "/project1";

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
            <Routes>
            <Route path={baseUrl + "/"} element={<Layout content={<swipePage />}/>} />
            <Route path={baseUrl + "/listViewPage"} element={<Layout content={<ListViewPage/>}/>} />
            </Routes>
        </Router>
      </QueryClientProvider>
    </>
    );
  }

export default App
