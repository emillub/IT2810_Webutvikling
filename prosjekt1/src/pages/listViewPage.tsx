import MovieCard from '../components/movieCard'
import "../styles/listViewPage.css"
import { fetchTopRatedMovies, movieApiInterface } from '../server/api'
import { useQuery } from '@tanstack/react-query'
import FilterDropdown from '../components/filterDropdown'

const ListViewPage = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchTopRatedMovies({ page: 1 }),
    refetchOnMount: true,
  })

  
  const dummyMovie: movieApiInterface = {
    backdrop_path: "",
    id: 0,
    title: "The movie",
    original_title: "The movie",
    overview: "",
    poster_path: "https://image.tmdb.org/t/p//w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    adult: false,
    original_language: "en",
    genre_ids: [28, 35],
    popularity: 0,
    release_date: "",
    vote_average: 0,
    vote_count: 0
  }


  return (
    <>
    
      <h1 id='listViewHeader'>Movies</h1>
      <FilterDropdown/>
      {
        isLoading?
        <p>Loading...</p>
        :
        <div className='movie-grid'>
        {data &&
          data.results.map((m, i) => (
            <MovieCard movie={m} key={i} />
          ))}
      </div>
      }
    </>
  )
}

export default ListViewPage