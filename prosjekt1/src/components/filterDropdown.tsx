import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchMovieGenres } from '../server/api'
import { useFilter } from '../contexts/filterContext'

export default function FilterDropdown() {
  const { setFilter } = useFilter()

  const { data, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchMovieGenres,
    refetchOnMount: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedKey = event.target.value;
    console.log("Selected key:", selectedKey);
    setFilter(Number(selectedKey));
  };

  return (
    <select name="filterDropdown" id="filterDropdown" onChange={handleChange}>
      <option key={0} value={0}>All genres</option>
      {data?.genres.map((obj) => (
        <option key={obj.id} value={obj.id}>{obj.name}</option>
      ))}
    </select>
  )
}

