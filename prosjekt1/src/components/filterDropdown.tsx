import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieGenres, genreApiInterface} from '../server/api'

export default function FilterDropdown() {
  
  
const { data, isLoading } = useQuery({
  queryKey: ["genres"],
  queryFn: fetchMovieGenres,
  refetchOnMount: true,
});

  return (
    <select name="filterDropDownMenu" id="filterDropDownMenu">
        {data?.genres.map((obj) => (<option value={obj.id}>{obj.name}</option>))}
    </select>
  )
}

