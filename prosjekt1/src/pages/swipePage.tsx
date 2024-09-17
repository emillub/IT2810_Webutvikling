// @ts-ignore
import React, { useState } from 'react'
import MovieCard from '../components/movieCard'
// @ts-ignore
import { useQuery, useQueryClient } from '@tanstack/react-query'
// @ts-ignore
import { fetchRandomMeal, movieApiInterface } from '../server/api'


const SwipePage = () => {

  const {data, refetch} = useQuery({
    queryKey: ['meal'],
    queryFn:  ()=>{},
    staleTime: Infinity,
    
  })
  
  return (
    <>
    <button onClick={()=>refetch()}>Left</button>
    <button onClick={()=>refetch()}>Right</button>
    </>

  )
}

export default SwipePage