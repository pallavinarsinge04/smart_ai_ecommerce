import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([
      { id: 1, name: "Smart Watch", price: 1999, qty: 1 },
      { id: 2, name: "Wireless Earbuds", price: 1499, qty: 2 },
      { id: 3, name: "Gaming Mouse", price: 999, qty: 1 },
    ]);
  }, []);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div>
      <Navbar />

      <div className="cart-container">

        {/* HEADER */}
        <div className="cart-header">
          <h1>🛒 Your Cart</h1>
          <p>Review and manage your selected items</p>
        </div>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 😢</h2>
            <p>Start adding amazing products!</p>
          </div>
        ) : (
          <div className="cart-layout">

            {/* LEFT SIDE - ITEMS */}
            <div className="cart-items">

              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>Price: ₹ {item.price}</p>
                  </div>

                  {/* QUANTITY */}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  {/* REMOVE */}
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>
              ))}

            </div>

            {/* RIGHT SIDE - SUMMARY */}
            <div className="cart-summary">

              <h2>💰 Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹ {total}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="summary-total">
                <h3>Total: ₹ {total}</h3>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout
              </button>

              <button className="continue-btn">
                Continue Shopping
              </button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;