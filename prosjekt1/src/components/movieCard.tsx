import { movieApiInterface } from '../server/api'

interface movieCardProps {
  meal: movieApiInterface
}

const MovieCard = ({ meal }: movieCardProps) => {
  return (
    <>
      <div className=''>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </>
  )
}

export default MovieCard