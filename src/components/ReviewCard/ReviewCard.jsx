import css from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  return (
    <>
      <h4>Author: {review.author}</h4>
      <p>Created: {new Date(review.created_at).toLocaleString()}</p>
      <p>{review.content}</p>
      <a href={review.url} target="_blank" className={css.link}>
        Read original
      </a>
    </>
  );
};

export default ReviewCard;
