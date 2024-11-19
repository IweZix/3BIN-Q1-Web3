import MovieCard from "components/MovieCard/MovieCard";
import "./MovieListView.css";

const MovieListView = ({ movies }) => {
  return (
    <div>
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
