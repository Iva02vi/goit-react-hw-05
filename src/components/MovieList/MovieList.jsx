import css from "./MovieList.module.css";
import MovieListElement from "../MovieListElement/MovieListElement";
import { useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.item}>
            <MovieListElement movie={movie} state={location} />
          </li>
        ))}
      </ul>
    </>
  );
}
