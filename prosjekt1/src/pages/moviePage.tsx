import { useEffect, useState } from "react";
import LikeButton from "../components/likeButton";
import { useQuery } from '@tanstack/react-query'
import { BASE_IMAGE_URL, fetchMovieGenres, movieApiInterface, useTopRatedMovies } from "../server/api";
import "../styles/moviePage.css";
import { useParams } from "react-router-dom";
import Header from "../components/header";


const MoviePage = () => {
    const [movie, setMovie] = useState<movieApiInterface>()
    const { movieId } = useParams();
    const { data, isLoading } = useTopRatedMovies();

    const { data: genresData } = useQuery({
        queryKey: ["genres"],
        queryFn: fetchMovieGenres,
        refetchOnMount: true,
    });

    useEffect(() => {
        const m = data?.results.find(m => m.id.toString() === movieId);
        if (m) setMovie(m);
    }, [data, movieId]);

    const mapGenresToNames = (genreIds: number[]) => {
        return genreIds.map(id => {
            const genre = genresData?.genres.find(g => g.id === id);
            return genre ? genre.name : "Unknown";
        });
    };

    return (
        <div className="movie-page">
            {isLoading ?
                <p>Loading...</p>
                :
                <>
                    {movie && movieId &&
                        <>
                            <Header title={movie.title} />
                            <img
                                src={BASE_IMAGE_URL + movie.poster_path}
                                alt={movie.title}
                                className="poster"
                            />
                            <section className="movieInfo">
                                <p>{movie.overview}</p>
                                <p>
                                    Genres: {mapGenresToNames(movie.genre_ids).join(', ')}
                                </p>
                                <p>Release date: {movie.release_date}</p>
                                <p>Original language: {movie.original_language}</p>
                            </section>
                            <LikeButton itemId={Number(movieId)} />
                        </>
                    }
                </>
            }
        </div>
    );
};

export default MoviePage;
