import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'
import { useTopRatedMovies } from '../server/api'
import '../styles/swipepage.css'
import Header from '../components/header'


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
    <Header title={'View movies one by one'} instructions='Clock on a movie for details about it'/>
      <div className='swipe-container'>
        {isLoading ?
          <p>Loading....</p> :
          <>
            {isError ? error :
              <>
                {data && <MovieCard movie={data.results[index]} />}
                <nav className='swipe-navigation'>
                  <button onClick={() => handleClick(true)} aria-label='Previous movie'>Previous</button>
                  <p>Showing {index + 1}/{data?.results.length}</p>
                  <button onClick={() => handleClick(false)} aria-label='Next movie'>Next</button>
                </nav>
              </>
            }
          </>
        }
      </div>
    </>

  )
}

export default SwipePage