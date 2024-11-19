import MovieCard from "components/MovieCard/MovieCard";
import { useOutletContext, useMatch } from "react-router-dom";

export const MoviePage = () => {
    const { movies } = useOutletContext();

    const match = useMatch("/movies/:id");
    const movieId = Number(match.params.id);
    if (isNaN(movieId)) {
        return <div>Invalid movie id</div>;
    }
    
    const movie = movies.find((movie) => movie.id === movieId);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <MovieCard movie={movie} />
        </div>
    );
}
