
function ReviewCard({ review }) {
  return (
    <div className="review-card">

      <h3>{review.userName}</h3>

      <h4>{"⭐".repeat(review.rating)}</h4>

      <p>{review.comment}</p>

    </div>
  );
}

export default ReviewCard;
