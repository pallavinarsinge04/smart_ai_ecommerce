
import RatingStars from "./RatingStars";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h4>{review.name}</h4>

      <RatingStars rating={review.rating} />

      <p>{review.comment}</p>
    </div>
  );
}

export default ReviewCard;

