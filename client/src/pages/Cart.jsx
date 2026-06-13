import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalQuantity,
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
                border: "1px solid gray",
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

              <h3>Price: ₹{item.price}</h3>

              <h3>Quantity: {item.quantity}</h3>

              <button onClick={() => decreaseQuantity(item._id)}>
                -
              </button>

              <button
                onClick={() => increaseQuantity(item._id)}
                style={{ margin: "0 10px" }}
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

          <h2>Total Different Products: {cart.length}</h2>

          <h2>Total Quantity: {totalQuantity}</h2>

          <h1>Total Price: ₹{totalPrice}</h1>

          <button
            onClick={clearCart}
            style={{
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;