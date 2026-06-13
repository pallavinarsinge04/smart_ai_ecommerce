import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "20px",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <h2>{item.name}</h2>

              <p>Price: ₹{item.price}</p>

              <h3>Quantity: {item.quantity}</h3>

              <button onClick={() => decreaseQuantity(item._id)}>
                -
              </button>

              <button onClick={() => increaseQuantity(item._id)}>
                +
              </button>

              <button onClick={() => removeFromCart(item._id)}>
                Remove
              </button>

              <h3>
                Subtotal: ₹{item.price * item.quantity}
              </h3>
            </div>
          ))}

          <hr />

          <h2>Total: ₹{totalPrice}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;