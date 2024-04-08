import { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPopularMovies() {
      try {
        setIsLoading(true);
        setError(null);
        const popularMovies = await fetchMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getPopularMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something wrong...</p>}
      {!isLoading && !error && <h1 className={css.title}>Trending today</h1>}
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
