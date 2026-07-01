import React from "react";
import Navbar from "../components/Navbar";
function Orders() {
  return (
    <div style={{ padding: "20px" }}>
         <Navbar />
      <h1>My Orders 📦</h1>

      <p>Here you can see all your placed orders.</p>

      {/* Sample Orders UI */}
      <div style={{ marginTop: "20px" }}>
        <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
          <h3>Order #1001</h3>
          <p>Product: Mobile Phone</p>
          <p>Status: Delivered ✅</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "10px" }}>
          <h3>Order #1002</h3>
          <p>Product: Headphones</p>
          <p>Status: Shipping 🚚</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;