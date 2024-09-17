import { movieApiInterface } from '../server/api'

interface movieCardProps {
  meal: movieApiInterface
}

const MovieCard = ({ meal: movie }: movieCardProps) => {
  return (
    <>
      <div className=''>
      </div>
    </>
  )
}

export default MovieCard