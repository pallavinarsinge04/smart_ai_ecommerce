import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="page">
      <div className="container">
        <h2 className="title">Cart</h2>

        {cart.map((item) => (
          <div key={item._id} className="card-ui" style={{ marginBottom: 10 }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))}

        <h2>Total: ₹{totalPrice}</h2>
      </div>
    </div>
  );
}

export default Cart;