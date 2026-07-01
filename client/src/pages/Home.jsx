import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: "Smart Watch", price: 1999, img: "https://via.placeholder.com/150" },
      { id: 2, name: "Wireless Earbuds", price: 1499, img: "https://via.placeholder.com/150" },
      { id: 3, name: "Gaming Mouse", price: 999, img: "https://via.placeholder.com/150" },
      { id: 4, name: "Bluetooth Speaker", price: 2499, img: "https://via.placeholder.com/150" },
    ]);
  }, []);

  return (
    <div className="home-container">

      <Navbar />

      {/* HERO */}
      <div className="hero-section">
        <h1>🛒 Smart AI E-Commerce</h1>
        <p>Discover products with AI-powered recommendations</p>
        <button>Explore Now</button>
      </div>

      {/* CATEGORIES */}
      <div className="section">
        <h2>📂 Categories</h2>
        <div className="categories">
          <div className="cat">Electronics</div>
          <div className="cat">Fashion</div>
          <div className="cat">Gaming</div>
          <div className="cat">Accessories</div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="section">
        <h2>🔥 Features</h2>
        <ul>
          <li>🤖 AI Product Recommendation</li>
          <li>💳 Secure Payments</li>
          <li>📦 Fast Delivery</li>
          <li>🛍️ Seller Dashboard</li>
        </ul>
      </div>

      {/* PRODUCTS */}
      <div className="section">
        <h2>🛍️ Top Products</h2>

        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>₹ {p.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* OFFERS */}
      <div className="offer-section">
        <h2>🎁 Special Offers</h2>
        <p>Get up to 70% OFF on electronics this weekend!</p>
        <button>Grab Deal</button>
      </div>

      {/* AI SECTION */}
      <div className="ai-section">
        <h2>🤖 AI Assistant</h2>
        <p>Ask: “Best laptop under 50k?”</p>
        <button>Open AI Chat</button>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Smart AI E-Commerce | Built with ❤️</p>
      </footer>

    </div>
  );
}

export default Home;