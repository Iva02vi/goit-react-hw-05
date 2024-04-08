import ReviewCard from "../ReviewCard/ReviewCard";
import css from "./ReviewsGallery.module.css";

const ReviewsGallery = ({ reviews }) => {
  return reviews.length === 0 ? (
    <p>No reviews on this movie yet.</p>
  ) : (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id} className={css.item}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsGallery;
