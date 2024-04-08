import ActorCard from "../ActorCard/ActorCard";
import css from "./ActorsGallery.module.css";

const ActorsGallery = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map((data) => (
        <li key={data.id} className={css.item}>
          <ActorCard data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ActorsGallery;
