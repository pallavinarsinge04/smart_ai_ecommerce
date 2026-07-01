import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // dummy cart data (later replace with Redux / Context / API)
    setCartItems([
      { id: 1, name: "Smart Watch", price: 1999, qty: 1 },
      { id: 2, name: "Wireless Earbuds", price: 1499, qty: 2 },
      { id: 3, name: "Gaming Mouse", price: 999, qty: 1 },
    ]);
  }, []);

  // remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      <div style={{ padding: "20px" }}>

        {/* HEADER */}
        <div style={{
          background: "#1E3A8A",
          color: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h1>🛒 Your Cart</h1>
          <p>Review your selected products</p>
        </div>

        {/* CART CONTENT */}
        <div style={{ marginTop: "20px" }}>

          {cartItems.length === 0 ? (
            <h3>Your cart is empty 😢</h3>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                  }}
                >

                  {/* ITEM INFO */}
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ₹ {item.price}</p>
                    <p>Quantity: {item.qty}</p>
                  </div>

                  {/* ACTIONS */}
                  <div>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        padding: "8px 12px",
                        background: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "5px"
                      }}
                    >
                      Remove
                    </button>
                  </div>

                </div>
              ))}

              {/* TOTAL SECTION */}
              <div style={{
                marginTop: "20px",
                padding: "15px",
                background: "#f5f5f5",
                borderRadius: "10px"
              }}>
                <h2>Total: ₹ {total}</h2>

                <button
                  style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    background: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Cart;