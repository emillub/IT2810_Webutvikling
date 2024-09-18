import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'
import {useTopRatedMovies } from '../server/api'


const SwipePage = () => {
  const [index, setIndex] = useState(0)
  const handleClick = (left: boolean) => {
    console.log("before: " + sessionStorage.getItem("index"))
    let newIndex;
    if (left && index > 0) {
      newIndex = index - 1
    }
    else {
      newIndex = index + 1
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

  const { data } = useTopRatedMovies()

  return (
    <div className='swipe-container'>
      {data && <MovieCard movie={data.results[index]} />}
      <button onClick={() => handleClick(true)}>left</button>
      <p>Showing {index + 1}/{data?.results.length}</p>
      <button onClick={() => handleClick(false)}>Right</button>
    </div>
  )
}

export default SwipePage