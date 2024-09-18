import { useEffect, useState } from "react";
import LikeButton from "../components/likeButton";
import { BASE_IMAGE_URL, movieApiInterface, useTopRatedMovies } from "../server/api";
import "../styles/moviePage.css";
import { useParams } from "react-router-dom";
import Header from "../components/header";


const MoviePage = () => {
    const [movie, setMovie] = useState<movieApiInterface>()
    const { movieId } = useParams();
    const { data, isLoading } = useTopRatedMovies()

    useEffect(()=>{
        const m = data?.results.find(m => m.id.toString() == movieId)
        {m && setMovie(m)}
    },[data])

    return (
        <div className="movie-page">
            {isLoading ?
                <p>Loading...</p>
                :
                <>
                    {movie && movieId &&
                        <>
                            <Header title={movie.title}/>
                            <img
                                src={BASE_IMAGE_URL + movie.poster_path}
                                alt={movie.title}
                                className="poster"
                            />
                            <section className="movieInfo">
                                <p>{movie.overview}</p>
                                <p>Genres: Action, Comedy</p>
                                <p>Release date: {movie.release_date}</p>
                                <p>Original language: {movie.original_language}</p>
                            </section>
                            <LikeButton itemId={Number(movieId)}/>
                        </>

                    }
                </>
            }
        </div>
    );
};

export default MoviePage;