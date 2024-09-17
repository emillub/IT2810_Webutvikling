const BASE_IMAGE_URL = "https://image.tmdb.org/t/p//w300"
const RANDOM_MEAL = "random.php"


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



