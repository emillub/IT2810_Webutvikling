import './styles/App.css'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import SwipePage from './pages/swipePage'
import ListViewPage from './pages/listViewPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { fetchTopRatedMovies } from './server/api';
import MoviePage from './pages/moviePage';
import Layout from './components/Layout';

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
            <Route path={baseUrl + "/movie/:movieId"} element={<Layout content={<MoviePage/>}/>} />
            </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App
