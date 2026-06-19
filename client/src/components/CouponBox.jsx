
import { useState } from "react";
import axios from "axios";

function CouponBox({ total }) {
  const [code, setCode] = useState("");

  const applyCoupon = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/coupons/apply",
        {
          code,
          total,
        }
      );

      alert(
        "Discount ₹" +
          res.data.discount +
          "\nFinal ₹" +
          res.data.finalAmount
      );
    } catch (err) {
      alert(
        err.response?.data?.message || "Failed to apply coupon"
      );
    }
  };

  return (
    <div>

      <h3>Apply Coupon</h3>

      <input
        placeholder="Coupon Code"
        onChange={(e) => setCode(e.target.value)}
      />

      <button onClick={applyCoupon}>
        Apply
      </button>

    </div>
  );
}

export default CouponBox;
