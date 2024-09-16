// @ts-ignore
import React, { useState } from 'react'
import RecipeCard from '../components/recipeCard'
// @ts-ignore
import { useQuery, useQueryClient } from '@tanstack/react-query'
// @ts-ignore
import { fetchRandomMeal, mealInterface } from '../server/api'


const SwiperPage = () => {

  const {data, refetch} = useQuery({
    queryKey: ['meal'],
    queryFn:  fetchRandomMeal,
    staleTime: Infinity,
    
  })
  
  const meal = data?.meals[0]
  return (
    <>
    {meal&& 
    <RecipeCard meal={meal}/>}
    <button onClick={()=>refetch()}>Left</button>
    <button onClick={()=>refetch()}>Right</button>
    </>

  )
}

export default SwiperPage