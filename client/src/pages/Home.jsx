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
     {/* CATEGORIES */}
<div className="section">
  <h2>📂 Shop by Category</h2>

  <div className="categories">

    {/* Electronics */}
    <div className="category-card">
      <div className="category-icon">💻</div>
      <h3>Electronics</h3>
      <p>
        Shop the latest smartphones, laptops, smart watches, headphones,
        speakers, cameras, and smart home devices.
      </p>

      <button>Explore Electronics</button>
    </div>

    {/* Fashion */}
    <div className="category-card">
      <div className="category-icon">👕</div>
      <h3>Fashion</h3>
      <p>
        Discover trendy clothing, shoes, bags, sunglasses, watches,
        and premium fashion accessories for every occasion.
      </p>

      <button>Explore Fashion</button>
    </div>

    {/* Gaming */}
    <div className="category-card">
      <div className="category-icon">🎮</div>
      <h3>Gaming</h3>
      <p>
        Buy gaming laptops, mechanical keyboards, gaming mice,
        consoles, controllers, headsets, and accessories.
      </p>

      <button>Explore Gaming</button>
    </div>

    {/* Accessories */}
    <div className="category-card">
      <div className="category-icon">🎧</div>
      <h3>Accessories</h3>
      <p>
        Find chargers, power banks, USB cables, laptop bags,
        phone covers, adapters, and other essential gadgets.
      </p>

      <button>Explore Accessories</button>
    </div>

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
     {/* PRODUCTS */}
<div className="section">
  <div className="section-header">
    <h2>🔥 Top Products</h2>
    <button className="view-all-btn">View All</button>
  </div>

  <div className="product-grid">
    {products.map((p) => (
      <div className="product-card" key={p.id}>
        <div className="discount-badge">20% OFF</div>

        <img src={p.img} alt={p.name} />

        <div className="product-info">
          <span className="product-category">Electronics</span>

          <h3>{p.name}</h3>

          <div className="rating">
            ⭐⭐⭐⭐⭐ <span>(4.8)</span>
          </div>

          <div className="price-box">
            <span className="new-price">₹ {p.price}</span>
            <span className="old-price">
              ₹ {Math.floor(p.price * 1.3)}
            </span>
          </div>

          <button className="cart-btn">
            🛒 Add to Cart
          </button>
        </div>
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
      {/* AI SECTION */}
<div className="ai-section">

  <div className="ai-left">
    <span className="ai-badge">🤖 AI Powered</span>

    <h2>Your Smart Shopping Assistant</h2>

    <p>
      Find the perfect product in seconds with AI recommendations.
      Ask anything like:
    </p>

    <div className="ai-suggestions">
      <span>💻 Best Laptop under ₹50,000</span>
      <span>🎧 Best Headphones for Gaming</span>
      <span>⌚ Smart Watch with AMOLED Display</span>
      <span>📱 Best Phone Camera under ₹30,000</span>
    </div>

    <button className="ai-btn">
      💬 Start AI Chat
    </button>
  </div>

  <div className="ai-right">
    <div className="chat-card">
      <h3>🤖 AI Assistant</h3>

      <div className="chat-message ai">
        👋 Hi! How can I help you today?
      </div>

      <div className="chat-message user">
        Recommend a gaming laptop under ₹60,000.
      </div>

      <div className="chat-message ai">
        🎯 I found 5 laptops with RTX graphics,
        SSD storage, and excellent reviews.
      </div>

      <button className="explore-btn">
        Explore Recommendations →
      </button>
    </div>
  </div>

</div>
      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Smart AI E-Commerce | Built with ❤️</p>
      </footer>

    </div>
  );
}

export default Home;