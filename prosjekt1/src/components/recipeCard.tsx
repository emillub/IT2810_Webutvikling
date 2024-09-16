import { mealInterface } from '../server/api'

interface recipeCardProps {
  meal: mealInterface
}

const RecipeCard = ({ meal }: recipeCardProps) => {
  return (
    <>
      <div className=''>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </>
  )
}

export default RecipeCard