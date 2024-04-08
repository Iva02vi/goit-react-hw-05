import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovie } from "../../api";
import GoBackLink from "../../components/GoBackLink/GoBackLink";
import Loader from "../../components/Loader/Loader";
import MovieItem from "../../components/MovieItem/MovieItem";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

const MovieDetailsPage = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <GoBackLink />
      {isLoading && <Loader />}
      {error && <p>Something wrong...</p>}
      {movie && (
        <>
          <MovieItem movie={movie} />
          <AdditionalInfo />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
