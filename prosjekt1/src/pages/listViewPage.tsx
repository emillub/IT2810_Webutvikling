import MovieCard from '../components/movieCard'
import "../styles/listViewPage.css"
import { fetchTopRatedMovies, movieApiInterface, useTopRatedMovies } from '../server/api'
import Header from '../components/header'


const ListViewPage = () => {

  const { data, isLoading, isError, error } = useTopRatedMovies()

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
      <Header title={'Scroll through top rated movies'} instructions='Click on a movie for details about it'/>
      {
        isLoading ?
          <p>Loading...</p>
          :
          <>
            {isError ? { error } :
              <section className='movie-grid'>
                {data &&
                  data.results.map((m, i) => (
                    <MovieCard movie={m} key={i} />
                  ))}
              </section>
            }
          </>
      }
    </>
  )
}

export default ListViewPage