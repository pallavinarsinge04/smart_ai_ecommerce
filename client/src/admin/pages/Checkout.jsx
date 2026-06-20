import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { placeOrder } from "../../services/orderApi";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async () => {
    try {
      await placeOrder({
        customer: form,
        items: cart,
        total: totalPrice,
      });
      const[coupon,setCoupon]=useState(""); const apply=async()=>{ const res=await applyCoupon(coupon,total); setTotal(res.data.finalAmount); };

      clearCart();

      navigate("/success");
    } catch (err) {
      alert("Order Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Checkout</h1>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <br />
      <br />

      <textarea
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />

      <h2>Total : ₹{totalPrice}</h2>

      <button onClick={handleOrder}>
        Place Order
      </button>
      <input placeholder="Coupon Code" value={coupon} onChange={(e)=>setCoupon(e.target.value)} /> <button onClick={apply}> Apply Coupon </button>
    </div>
  );
}

export default Checkout;