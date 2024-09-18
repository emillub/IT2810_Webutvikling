import { movieApiInterface } from '../server/api'
import "../styles/movieCard.css"
import LikeButton from './likeButton'

interface movieCardProps {
  movie: movieApiInterface
}

const MovieCard = ({ movie}: movieCardProps) => {
  return (
    <>
      <div className='movie-container'>
        <h2 className='movie-title'>{movie.title}</h2>
        <a href="">
          <img src={movie.poster_path} alt={movie.title} className='movie-poster'/>
          <LikeButton itemId={movie.id}/>
        </a>
      </div>
    </>
  )
}

export default MovieCard