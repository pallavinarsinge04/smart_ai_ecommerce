import React from "react";

function Success() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>✅</div>

        <h1 style={styles.title}>Order Placed Successfully</h1>

        <p style={styles.text}>
          Thank you for shopping with us 🎉
        </p>

        <p style={styles.subtext}>
          Your order has been confirmed and will be processed soon.
        </p>

        <button style={styles.button}>Continue Shopping</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #a8edea, #fed6e3)",
    fontFamily: "Arial",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px",
  },

  icon: {
    fontSize: "50px",
    marginBottom: "10px",
  },

  title: {
    marginBottom: "10px",
  },

  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },

  subtext: {
    fontSize: "13px",
    color: "gray",
    marginBottom: "20px",
  },

  button: {
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    background: "#28a745",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Success;