import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Your Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div style={styles.emptyCard}>
          <h2>Your cart is empty</h2>
          <p>Add some products to continue shopping</p>
          <Link to="/product">
            <button style={styles.shopBtn}>Shop Now</button>
          </Link>
        </div>
      ) : (
        <div style={styles.container}>
          {/* LEFT: ITEMS */}
          <div style={styles.itemsBox}>
            {cart.map((item) => (
              <div key={item.id} style={styles.card}>
                <div>
                  <h3 style={styles.name}>{item.name}</h3>
                  <p style={styles.price}>₹{item.price}</p>
                  <p style={styles.subtotal}>
                    Subtotal: ₹{item.price * item.quantity}
                  </p>
                </div>

                <div style={styles.actions}>
                  <button
                    style={styles.qtyBtn}
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span style={styles.qty}>{item.quantity}</span>

                  <button
                    style={styles.qtyBtn}
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: SUMMARY */}
          <div style={styles.summary}>
            <h2>Order Summary</h2>
            <hr />

            <p>Total Items: {cart.length}</p>
            <h3>Total: ₹{totalPrice}</h3>

            <Link to="/checkout">
              <button style={styles.checkoutBtn}>Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  itemsBox: {
    flex: 2,
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    background: "white",
    padding: "15px",
    marginBottom: "12px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    alignItems: "center",
  },

  name: {
    margin: "0",
  },

  price: {
    color: "#444",
    fontWeight: "bold",
  },

  subtotal: {
    fontSize: "13px",
    color: "gray",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  qtyBtn: {
    padding: "6px 10px",
    border: "none",
    background: "#ddd",
    borderRadius: "6px",
    cursor: "pointer",
  },

  qty: {
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  removeBtn: {
    background: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  summary: {
    flex: 1,
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    height: "fit-content",
  },

  checkoutBtn: {
    width: "100%",
    padding: "12px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
  },

  emptyCard: {
    textAlign: "center",
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  shopBtn: {
    padding: "10px 20px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default Cart;