import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // dummy products (replace with API later)
    setProducts([
      { id: 1, name: "Smart Watch", price: 1999 },
      { id: 2, name: "Wireless Earbuds", price: 1499 },
      { id: 3, name: "Gaming Mouse", price: 999 },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      {/* HERO SECTION */}
       <Navbar />
      <div style={{
        background: "#1E3A8A",
        color: "white",
        padding: "40px",
        borderRadius: "10px"
      }}>
        <h1>🛒 Smart AI E-Commerce</h1>
        <p>Find best products with AI recommendation system</p>
        <button style={{
          padding: "10px 20px",
          marginTop: "10px",
          background: "white",
          color: "#1E3A8A",
          border: "none",
          cursor: "pointer"
        }}>
          Explore Now
        </button>
      </div>

      {/* FEATURES SECTION */}
      <div style={{ marginTop: "30px" }}>
        <h2>🔥 Features</h2>
        <ul>
          <li>🤖 AI Product Recommendation</li>
          <li>💳 Secure Razorpay Payments</li>
          <li>📦 Order Tracking System</li>
          <li>🛍️ Seller Dashboard</li>
        </ul>
      </div>

      {/* PRODUCTS SECTION */}
      <div style={{ marginTop: "30px" }}>
        <h2>🛍️ Top Products</h2>

        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          {products.map((p) => (
            <div key={p.id} style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "200px",
              borderRadius: "8px"
            }}>
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* AI SECTION */}
      <div style={{
        marginTop: "40px",
        padding: "20px",
        background: "#F3F4F6",
        borderRadius: "10px"
      }}>
        <h2>🤖 AI Assistant</h2>
        <p>Ask AI: "Best laptop under 50k?"</p>
        <button>Open AI Chat</button>
      </div>

      {/* FOOTER */}
      <div style={{
        marginTop: "40px",
        textAlign: "center",
        padding: "20px",
        background: "#111827",
        color: "white"
      }}>
        <p>© 2026 Smart AI E-Commerce</p>
      </div>

    </div>
  );
}

export default Home;