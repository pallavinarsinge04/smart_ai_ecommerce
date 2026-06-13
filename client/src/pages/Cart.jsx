import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    totalQuantity,
  } = useCart();

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="150"
              />

              <h2>{item.name}</h2>

              <p>Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <button onClick={() => decreaseQuantity(item._id)}>
                -
              </button>

              <button
                style={{ margin: "0 10px" }}
                onClick={() => increaseQuantity(item._id)}
              >
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

          <h2>Total Products: {cart.length}</h2>

          <h2>Total Quantity: {totalQuantity}</h2>

          <h1>Total Price: ₹{totalPrice}</h1>
        </>
      )}
    </div>
  );
}

export default Cart;