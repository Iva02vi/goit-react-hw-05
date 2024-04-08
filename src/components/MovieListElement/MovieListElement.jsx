import { Link } from "react-router-dom";
import css from "./MovieListElement.module.css";

const MovieListElement = ({ movie, state }) => {
  if (!movie.poster_path) {
    return null;
  }

  return (
    <Link to={`/movies/${movie.id}`} className={css.link} state={state}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p className={css.title}>{movie.title}</p>
    </Link>
  );
};

export default MovieListElement;
