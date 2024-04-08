import { useSearchParams } from "react-router-dom";
import css from "./MoviesFilter.module.css";
import toast from "react-hot-toast";

export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();

  const findMovies = (query) => {
    params.set("query", query);
    setParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.query.value.trim();

    if (searchValue === "") {
      toast("Please, enter movie title for searching!");

      return;
    }

    findMovies(searchValue);
    onSubmit(searchValue);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        placeholder="Enter the title..."
        name="query"
      />
      <button type="submit" className={css.search}>
        Find
      </button>
    </form>
  );
}
