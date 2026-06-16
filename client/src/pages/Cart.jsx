import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={styles.emptyBox}>
          <h2>Your Cart is Empty 🛒</h2>
          <Link to="/product">
            <button style={styles.shopBtn}>Start Shopping</button>
          </Link>
        </div>
      ) : (
        <div style={styles.wrapper}>
          {/* LEFT SIDE - CART ITEMS */}
          <div style={styles.itemsSection}>
            {cart.map((item) => (
              <div key={item.id} style={styles.card}>
                <div>
                  <h3>{item.name}</h3>
                  <p style={styles.price}>₹{item.price}</p>
                  <p style={styles.subtotal}>
                    Subtotal: ₹{item.price * item.quantity}
                  </p>
                </div>

                <div style={styles.actions}>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span style={styles.qty}>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div style={styles.summary}>
            <h2>Order Summary</h2>
            <hr />

            <p>Total Items: {cart.length}</p>
            <h3>Total: ₹{totalPrice}</h3>

            <Link to="/checkout">
              <button style={styles.checkoutBtn}>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "20px", fontFamily: "Arial" },
  title: { textAlign: "center" },

  wrapper: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },

  itemsSection: {
    flex: 2,
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
    alignItems: "center",
  },

  price: {
    fontWeight: "bold",
  },

  subtotal: {
    fontSize: "14px",
    color: "gray",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  qty: {
    padding: "5px 10px",
    border: "1px solid gray",
  },

  removeBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },

  summary: {
    flex: 1,
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    height: "fit-content",
  },

  checkoutBtn: {
    width: "100%",
    padding: "10px",
    background: "green",
    color: "white",
    border: "none",
    marginTop: "10px",
    cursor: "pointer",
  },

  shopBtn: {
    padding: "10px 20px",
    background: "#007bff",
    color: "white",
    border: "none",
    marginTop: "10px",
  },

  emptyBox: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default Cart;