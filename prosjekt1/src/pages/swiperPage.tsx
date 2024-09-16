import React from 'react'
import RecipeCard from '../components/recipeCard'
import { useQuery } from '@tanstack/react-query'
import { fetchRandomMeal } from '../server/api'


const SwiperPage = () => {
  const {data,isLoading} = useQuery({
    queryKey: ["randomMeal"],
    queryFn:fetchRandomMeal
  })
  
  const meal = data?.meals[0]
  return (
    <>
    <RecipeCard meal={meal}>
      
    </RecipeCard>
    </>
  )
}

export default SwiperPage