import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>{item.name}</h2>

          <p>₹{item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increaseQuantity(item._id)}>+</button>

          <button onClick={() => decreaseQuantity(item._id)}>-</button>

          <button onClick={() => removeFromCart(item._id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>
    </div>
  );
}

export default Cart;