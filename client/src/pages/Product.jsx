import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    image: "https://via.placeholder.com/150",
  },
];

function Product() {
  const { addToCart } = useCart();

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Our Products 🛍️</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h3>{product.name}</h3>
            <p style={styles.price}>₹{product.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
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

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },

  button: {
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },
};

export default Product;