import React from "react";
import Navbar from "../components/Navbar";
function Admin() {
  return (
    <div style={{ padding: "20px" }}>
        <Navbar />
      <h1>Admin Dashboard 🛠️</h1>

      <p>Manage your e-commerce website here.</p>

      {/* Dashboard Cards */}
      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        
        <div style={{ border: "1px solid #ddd", padding: "15px", width: "200px" }}>
          <h3>Total Users</h3>
          <p>120</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "15px", width: "200px" }}>
          <h3>Total Products</h3>
          <p>45</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "15px", width: "200px" }}>
          <h3>Total Orders</h3>
          <p>78</p>
        </div>

      </div>

      {/* Admin Actions */}
      <div style={{ marginTop: "30px" }}>
        <h2>Quick Actions</h2>

        <button style={{ marginRight: "10px" }}>➕ Add Product</button>
        <button style={{ marginRight: "10px" }}>🗑️ Delete Product</button>
        <button>📦 Manage Orders</button>
      </div>
    </div>
  );
}

export default Admin;