import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts([
      { id: 1, name: "Smart Watch", price: 1999, category: "Electronics" },
      { id: 2, name: "Wireless Earbuds", price: 1499, category: "Electronics" },
      { id: 3, name: "Gaming Mouse", price: 999, category: "Accessories" },
      { id: 4, name: "Laptop Stand", price: 799, category: "Accessories" },
      { id: 5, name: "Bluetooth Speaker", price: 2499, category: "Electronics" },
    ]);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial" }}>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE WRAPPER */}
      <div style={{ padding: "20px" }}>

        {/* HEADER SECTION */}
        <div style={{
          background: "#1E3A8A",
          color: "white",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h1>🛍️ Product Page</h1>
          <p>All products are listed below</p>
        </div>

        {/* SEARCH BAR */}
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>

        {/* PRODUCT GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>

          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div key={product.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  background: "white"
                }}
              >
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>

                <button style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#1E3A8A",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px"
                }}>
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found 😢</p>
          )}

        </div>
      </div>
    </div>
  );
}

export default Products;