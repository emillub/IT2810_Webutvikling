import { mealInterface } from '../server/api'

interface recipeCardProps {
  meal : mealInterface  | undefined
}

const RecipeCard = ({meal} : recipeCardProps ) => {
  return (
    <>
    {meal? 
    <div className=''>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
    :
    <p>Loading...</p>}
    </>

  )
}

export default RecipeCard