
import { useState } from "react";
import { addReview } from "../services/reviewService";

function ReviewForm({ productId }) {
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const submit = async () => {
    await addReview({
      ...form,
      product: productId,
      user: "USER_ID_HERE",
    });

    alert("Review Added");
  };

  return (
    <div className="review-form">

      <input
        placeholder="Your Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <select
        onChange={(e) =>
          setForm({
            ...form,
            rating: Number(e.target.value),
          })
        }
      >
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </select>

      <textarea
        placeholder="Write your review"
        onChange={(e) =>
          setForm({
            ...form,
            comment: e.target.value,
          })
        }
      />

      <button onClick={submit}>
        Submit Review
      </button>
    </div>
  );
}

export default ReviewForm;
