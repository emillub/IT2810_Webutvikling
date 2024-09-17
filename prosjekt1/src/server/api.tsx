const BASE_IMAGE_URL = "https://image.tmdb.org/t/p//w300"
const RANDOM_MEAL = "random.php"


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



