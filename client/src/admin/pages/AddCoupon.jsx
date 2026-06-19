
import { useState } from "react";
import axios from "axios";

function AddCoupon() {
  const [form, setForm] = useState({
    code: "",
    discount: "",
    type: "percentage",
    minAmount: "",
    expiryDate: "",
  });

  const submit = async () => {
    await axios.post(
      "http://localhost:5000/api/coupons",
      form
    );

    alert("Coupon Created");
  };

  return (
    <div>

      <h1>Add Coupon</h1>

      <input
        placeholder="Code"
        onChange={(e) =>
          setForm({ ...form, code: e.target.value })
        }
      />

      <input
        placeholder="Discount"
        onChange={(e) =>
          setForm({ ...form, discount: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }
      >
        <option value="percentage">
          Percentage
        </option>

        <option value="flat">
          Flat
        </option>
      </select>

      <input
        placeholder="Minimum Amount"
        onChange={(e) =>
          setForm({
            ...form,
            minAmount: e.target.value,
          })
        }
      />

      <input
        type="date"
        onChange={(e) =>
          setForm({
            ...form,
            expiryDate: e.target.value,
          })
        }
      />

      <button onClick={submit}>
        Create Coupon
      </button>

    </div>
  );
}

export default AddCoupon;
