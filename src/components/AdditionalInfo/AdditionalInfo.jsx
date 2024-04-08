import { NavLink } from "react-router-dom";
import css from "./AdditionalInfo.module.css";

const AdditionalInfo = () => {
  return (
    <>
      <h2 className={css.title}>Additional information:</h2>
      <ul className={css.list}>
        <li>
          <NavLink to="cast">Cast info</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInfo;
