// @ts-ignore
import React, { useState } from 'react'
import MovieCard from '../components/movieCard'
// @ts-ignore
import { useQuery, useQueryClient } from '@tanstack/react-query'
// @ts-ignore
import { fetchRandomMeal, movieApiInterface } from '../server/api'


const swipePage = () => {

  const {data, refetch} = useQuery({
    queryKey: [],
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

export default swipePage