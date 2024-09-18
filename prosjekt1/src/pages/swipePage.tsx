import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'
import {useTopRatedMovies } from '../server/api'
import '../styles/swipepage.css'


const SwipePage = () => {
  const [index, setIndex] = useState(0)

  const handleClick = (left: boolean) => {
    console.log("before: " + sessionStorage.getItem("index"))
    let newIndex;
    {left? newIndex = index-1 : newIndex = index+1}

    if (!data) return
    const rangeLimit = data.results.length-1
    if  (newIndex < 0) {
      newIndex = rangeLimit
    }else if (newIndex > rangeLimit){
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

  const { data } = useTopRatedMovies()

  return (
    <div className='swipe-container'>
      {data && <MovieCard movie={data.results[index]} />}
      <nav className='swipe-navigation'>
        <button onClick={() => handleClick(true)}>left</button>
        <p>Showing {index + 1}/{data?.results.length}</p>
        <button onClick={() => handleClick(false)}>Right</button>
      </nav>
    </div>
  )
}

export default SwipePage