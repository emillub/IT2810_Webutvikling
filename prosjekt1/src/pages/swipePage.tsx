import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'
import { useTopRatedMovies } from '../server/api'
import '../styles/swipepage.css'
import Header from '../components/header'
import ErrorMessage from '../components/errorMessage'


const SwipePage = () => {
  const [index, setIndex] = useState(0)

  const handleClick = (left: boolean) => {
    console.log("before: " + sessionStorage.getItem("index"))
    let newIndex;
    { left ? newIndex = index - 1 : newIndex = index + 1 }

    if (!data) return
    const rangeLimit = data.results.length - 1
    if (newIndex < 0) {
      newIndex = rangeLimit
    } else if (newIndex > rangeLimit) {
      newIndex = 0
    }

    setIndex(newIndex);
    sessionStorage.setItem("index", newIndex.toString())

    console.log("after: " + sessionStorage.getItem("index"))
  }

  useEffect(() => {
    if (sessionStorage.getItem("index")) {
      setIndex(Number(sessionStorage.getItem("index")))
    }
  }, [])

  const { data, isLoading, isError, error } = useTopRatedMovies()

  return (
    <>
      <Header title={'Preview movies one by one'} instructions='Click on a movie for details about it' />
      <div className='swipe-container'>
        {isLoading ?
          <p data-testid="loading-text">Loading....</p> :
          <>
            {isError ? <ErrorMessage message={error.message} /> :
              <>
                <nav className='swipe-navigation'>
                  <button className="swipe-button" onClick={() => handleClick(true)} aria-label='Previous movie'>&lt;</button>
                  {data && <MovieCard movie={data.results[index]} />}
                  <button className="swipe-button" onClick={() => handleClick(false)} aria-label='Next movie'>&gt;</button>
                </nav>
                <p className='swipe-text'>Showing {index + 1}/{data?.results.length}</p>
              </>
            }
          </>
        }
      </div>
    </>

  )
}

export default SwipePage