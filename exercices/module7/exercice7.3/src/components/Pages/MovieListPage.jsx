import PageTitle from "components/PageTitle/PageTitle";
import MovieListView from "components/MovieListView/MovieListView";
import AddMovieForm from "components/AddMovieForm/AddMovieForm";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies, addMovie } = useOutletContext();

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} />

      <AddMovieForm onMovieAdded={addMovie} />
    </div>
  );
};

export default MovieListPage;
