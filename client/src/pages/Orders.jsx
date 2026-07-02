import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Orders.css";

function Orders() {
 const [orders] = useState([
  {
    id: "1001",
    product: "Samsung Galaxy S25",
    price: 65999,
    status: "Delivered",
    payment: "Paid",
    address: "Pune, Maharashtra",
    date: "20 June 2026",
    image: "📱",
  },
  {
    id: "1002",
    product: "Sony Headphones",
    price: 5999,
    status: "Shipping",
    payment: "Paid",
    address: "Mumbai, Maharashtra",
    date: "25 June 2026",
    image: "🎧",
  },
  {
    id: "1003",
    product: "Apple Watch",
    price: 29999,
    status: "Pending",
    payment: "Cash on Delivery",
    address: "Nagpur, Maharashtra",
    date: "28 June 2026",
    image: "⌚",
  },
]);
  const getStatusClass = (status) => {
    if (status === "Delivered") return "delivered";
    if (status === "Shipping") return "shipping";
    return "pending";
  };

  return (
    <div>
      <Navbar />

      <div className="orders-container">

        {/* HEADER */}
        <div className="orders-header">
          <h1>📦 My Orders</h1>
          <p>Track your purchase history & delivery status</p>
        </div>

        {/* ORDERS LIST */}
        <div className="orders-grid">

          {orders.length === 0 ? (
            <div className="empty-orders">
              <h2>No orders yet 🛒</h2>
              <p>Start shopping to see your orders here</p>
            </div>
          ) : (
            orders.map((order) => (
             <div className="order-card" key={order.id}>

<div className="order-image">
{order.image}
</div>

<div className="order-content">

<div className="order-top">

<h3>Order #{order.id}</h3>

<span className={`status ${getStatusClass(order.status)}`}>
{order.status}
</span>

</div>

<h2>{order.product}</h2>

<p><strong>Price:</strong> ₹{order.price}</p>

<p><strong>Payment:</strong> {order.payment}</p>

<p><strong>Delivery:</strong> {order.date}</p>

<p><strong>Address:</strong> {order.address}</p>

<div className="progress">

<div className={`progress-bar ${getStatusClass(order.status)}`}></div>

</div>

<div className="btn-group">

<button className="track-btn">
Track Order
</button>

<button className="invoice-btn">
Invoice
</button>

<button className="review-btn">
Review
</button>

</div>

</div>

</div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default Orders;