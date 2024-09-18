import { useQuery } from "@tanstack/react-query";

export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p//w500"
const topRatedMoviesURL = (page : number)=>{return `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`}
const GENRE_LIST_URL = "https://api.themoviedb.org/3/genre/movie/list"

const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmZlZDQwNTdlY2U5YjFlMDYwMWE3NzMxZGYyZDYwZSIsIm5iZiI6MTcyNjU4MTA3My44MjA4ODUsInN1YiI6IjY1ZDM3YmZkMTI0MjVjMDE3Y2U1MGJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtfBzA_GZjIJ-0u0cKXRT3HChmCgumHh2kDdJGR9kA'
    }
  };


export interface movieApiInterface {
    backdrop_path: string,
    id: number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    adult: boolean,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    vote_average: number,
    vote_count: number
}

export interface genreApiInterface{
    id: number,
    name : string
}

interface fetchTopRatedMoviesProps {
    page : number
}

export const fetchTopRatedMovies = async ({page = 1} : fetchTopRatedMoviesProps) : Promise<{"page" : number, "results": movieApiInterface[]}> => {
    const res = await fetch(topRatedMoviesURL(page), API_OPTIONS);
    return await res.json();
}

export const fetchMovieGenres = async () : Promise<{"genres" : genreApiInterface}> =>{
    const res = await fetch(GENRE_LIST_URL, API_OPTIONS);
    return await res.json();
}

export const useTopRatedMovies = () => useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchTopRatedMovies({ page: 1 }),
    refetchOnMount: false,
    staleTime: Infinity
  })