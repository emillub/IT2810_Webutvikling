import MovieCard from '../components/movieCard'
import "../styles/listViewPage.css"
import { useTopRatedMovies } from '../server/api'
import FilterDropdown from '../components/filterDropdown'
import { useFilter } from '../contexts/filterContext'
import Header from '../components/header'
import ErrorMessage from '../components/errorMessage'

const ListViewPage = () => {

  const { filter } = useFilter()

  const { data, isLoading, isError, error } = useTopRatedMovies()


  return (
    <>

      <Header title={'Scroll through top rated movies'} instructions='Click on a movie for details about it' />
      <FilterDropdown />

      {
        isLoading ?
          <p className='loading-message' role='loading-message'>Loading...</p>
          :
          <>
            {isError ? <ErrorMessage message={error.message} /> :
              <>
                <section className='movie-grid'>

                  {data && (
                    data.results
                      .filter((m) => m.genre_ids.includes(filter) || filter === 0)


                      .map((m, i) => (
                        <MovieCard movie={m} key={i} />
                      )))}

                  {data && data.results.filter((m) => m.genre_ids.includes(filter) || filter === 0).length === 0 && (
                    <p className='noMatches'>No movies match the selected filter.</p>
                  )}

                </section>

              </>
            }
          </>

      }
    </>
  )
}

export default ListViewPage