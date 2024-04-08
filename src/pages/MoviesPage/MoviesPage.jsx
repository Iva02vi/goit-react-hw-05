import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByTitle } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const movieTitle = params.get("query") ?? "";

  useEffect(() => {
    async function refreshMovies() {
      handleSubmit(movieTitle);
    }

    refreshMovies();
  }, [movieTitle]);

  const handleSubmit = async (movieTitle) => {
    try {
      setMovies([]);
      setIsLoading(true);
      setError(null);
      const data = await fetchMoviesByTitle(movieTitle);

      setMovies(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MoviesFilter onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <p>Something wrong...</p>}
      {movies.length === 0 && !isLoading && !error && movieTitle && (
        <p>No movies found for the given query.</p>
      )}

      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
