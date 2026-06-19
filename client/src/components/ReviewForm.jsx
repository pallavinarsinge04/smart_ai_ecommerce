
import { useState } from "react";
import axios from "axios";

function ReviewForm({ productId }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitReview = async () => {
    await axios.post(
      "http://localhost:5000/api/reviews",
      {
        productId,
        userName: "Demo User",
        rating,
        comment,
      }
    );

    alert("Review Added");
  };

  return (
    <div>

      <h2>Add Review</h2>

      <select
        onChange={(e) =>
          setRating(Number(e.target.value))
        }
      >
        <option value="5">★★★★★</option>
        <option value="4">★★★★</option>
        <option value="3">★★★</option>
        <option value="2">★★</option>
        <option value="1">★</option>
      </select>

      <textarea
        placeholder="Write your review"
        onChange={(e) =>
          setComment(e.target.value)
        }
      />

      <button onClick={submitReview}>
        Submit Review
      </button>

    </div>
  );
}

export default ReviewForm;
