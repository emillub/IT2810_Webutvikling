const BASE_IMAGE_URL = "https://image.tmdb.org/t/p//w300"
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
    backdrop_path: String,
    id: number,
    title: String,
    original_title: String,
    overview: String,
    poster_path: String,
    adult: boolean,
    original_language: String,
    genre_ids: number[],
    popularity: number,
    release_date: String,
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

const fetchTopRatedMovies = ({page = 1} : fetchTopRatedMoviesProps) : Promise<{"page" : number, "results": movieApiInterface[]}> => {
    return fetch(topRatedMoviesURL(page), API_OPTIONS).then(res => res.json())
}

const fetchMovieGenres = () : Promise<{"genres" : genreApiInterface}> =>{
    return fetch(GENRE_LIST_URL,API_OPTIONS).then(res => res.json());
}