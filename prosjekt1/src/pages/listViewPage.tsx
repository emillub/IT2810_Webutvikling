import MovieCard from '../components/movieCard'
import "../styles/listViewPage.css"
import { fetchTopRatedMovies, movieApiInterface } from '../server/api'
import { useQuery } from '@tanstack/react-query'
import FilterDropdown from '../components/filterDropdown'
import { useFilter } from '../contexts/filterContext'

const ListViewPage = () => {

  const { filter } = useFilter()

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

      <h1>Movies</h1>
      <FilterDropdown />
      {
        isLoading ?
          <p>Loading...</p>
          :
          <div className='movie-grid'>

            {data && (
              data.results
                .filter((m) => m.genre_ids.includes(filter) || filter === 0)


                .map((m, i) => (
                  <MovieCard movie={m} key={i} />
                )))}

            {data && data.results.filter((m) => m.genre_ids.includes(filter) || filter === 0).length === 0 && (
              <p>No movies match the selected filter.</p>
            )
            }
            
          </div>
      }
    </>
  )
}

export default ListViewPage