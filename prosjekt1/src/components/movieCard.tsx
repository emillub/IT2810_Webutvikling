import { BASE_IMAGE_URL, movieApiInterface } from '../server/api'
import "../styles/movieCard.css"
import LikeButton from './likeButton'

interface movieCardProps {
  movie: movieApiInterface
}

const MovieCard = ({ movie}: movieCardProps) => {
  return (
    <>
      <article className='movie-container'>
        <h2 className='movie-title'>{movie.title}</h2>
        <div className='movie-poster-container'>
          <a href="">

          <img src={BASE_IMAGE_URL+movie.poster_path} alt={movie.title} className='movie-poster'/>
          </a>
          <LikeButton itemId={movie.id}/>
        </div>
      </article>
    </>
  )
}

export default MovieCard