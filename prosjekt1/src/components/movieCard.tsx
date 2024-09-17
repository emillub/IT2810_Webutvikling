import { movieApiInterface } from '../server/api'

interface movieCardProps {
  movie: movieApiInterface
}

const MovieCard = ({ movie}: movieCardProps) => {

  return (
    <>
      <div className='movie-container'>
        <h1>{movie.title}</h1>
        <img src={movie.poster_path} alt={movie.title} />
      </div>
    </>
  )
}

export default MovieCard