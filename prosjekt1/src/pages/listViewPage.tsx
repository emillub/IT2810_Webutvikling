// @ts-ignore
import React from 'react'
// @ts-ignore
import MovieCard from '../components/movieCard'
import { movieApiInterface } from '../server/api'

const ListViewPage = () => {
  const dummyMovie : movieApiInterface= {
    backdrop_path: "",
    id: 0,
    title: "The movie",
    original_title: "The movie",
    overview: "",
    poster_path: "https://image.tmdb.org/t/p//w300/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    adult: false,
    original_language: "en",
    genre_ids: [28,35],
    popularity: 0,
    release_date: "",
    vote_average: 0,
    vote_count: 0
  }

  return (
    <>
    <h1>All recipes</h1>
    <MovieCard movie={dummyMovie}/>
    </>
  )
}

export default ListViewPage