import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // dummy products (replace with API later)
    setProducts([
      { id: 1, name: "Smart Watch", price: 1999, category: "Electronics" },
      { id: 2, name: "Wireless Earbuds", price: 1499, category: "Electronics" },
      { id: 3, name: "Gaming Mouse", price: 999, category: "Accessories" },
      { id: 4, name: "Laptop Stand", price: 799, category: "Accessories" },
      { id: 5, name: "Bluetooth Speaker", price: 2499, category: "Electronics" },
    ]);
  }, []);

  // filter products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      <div style={{ padding: "20px" }}>

        {/* HEADER */}
        <h1>🛍️ All Products</h1>
        <p>Browse and buy best smart products</p>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px"
          }}
        />

        {/* PRODUCT GRID */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                width: "220px",
                borderRadius: "10px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p><b>₹ {product.price}</b></p>

              <button style={{
                padding: "8px 12px",
                background: "#1E3A8A",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;