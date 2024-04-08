import css from "./MovieItem.module.css";

const MovieItem = ({ movie }) => {
  return (
    <div className={css.movie}>
      <img
        className={css.img}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className={css.details}>
        <h2 className={css.title}>
          {movie.title} ({new Date(movie.release_date).getFullYear()})
        </h2>
        <div className={css.metadata}>
          <p className={css.release}>
            <b className={css.bold}>Release date: </b>
            {movie.release_date}
          </p>
          <p className={css.budget}>
            <b className={css.bold}>Budget: </b>${movie.budget}
          </p>
          <p className={css.rating}>
            <b className={css.bold}>Rating:</b> {movie.vote_average}
          </p>
          <p className={css.box}>
            <b className={css.bold}>Genres:</b>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
        <div className={css.production}>
          {!movie.production_companies.logo_path && (
            <b className={css.bold}>Production companies:</b>
          )}
          <ul className={css.companies}>
            {movie.production_companies.map((company) => (
              <li key={company.id}>
                {company.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                    alt={company.name}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={css.bold}>Overview</h3>
          <p className={css.overview}>{movie.overview}</p>
        </div>
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
          Movie home page
        </a>
      </div>
    </div>
  );
};

export default MovieItem;
