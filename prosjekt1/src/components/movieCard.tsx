import { movieApiInterface } from '../server/api'
import "../styles/movieCard.css"

interface movieCardProps {
  movie: movieApiInterface
}

const MovieCard = ({ movie}: movieCardProps) => {

  return (
    <>
      <a className='movie-container'>
        <h2 className='movie-title'>{movie.title}</h2>
        <img src={movie.poster_path} alt={movie.title} className='movie-poster'/>
      </a>
    </>
  )
}

export default MovieCard