import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Orders.css";

function Orders() {
  const [orders] = useState([
    {
      id: "1001",
      product: "Mobile Phone",
      status: "Delivered",
      date: "20 June 2026",
    },
    {
      id: "1002",
      product: "Headphones",
      status: "Shipping",
      date: "25 June 2026",
    },
    {
      id: "1003",
      product: "Smart Watch",
      status: "Pending",
      date: "28 June 2026",
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

                <div className="order-top">
                  <h3>Order #{order.id}</h3>
                  <span className={`status ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <p><b>Product:</b> {order.product}</p>
                <p><b>Date:</b> {order.date}</p>

                <button className="track-btn">
                  Track Order
                </button>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}

export default Orders;