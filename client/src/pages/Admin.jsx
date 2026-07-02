import React from "react";
import Navbar from "../components/Navbar";
import "./Admin.css";

function Admin() {
  const stats = [
    { title: "Total Users", value: 120 },
    { title: "Total Products", value: 45 },
    { title: "Total Orders", value: 78 },
    { title: "Revenue", value: "₹45,000" },
  ];

  const actions = [
    { label: "➕ Add Product", color: "blue" },
    { label: "🗑️ Delete Product", color: "red" },
    { label: "📦 Manage Orders", color: "green" },
    { label: "👤 Manage Users", color: "purple" },
  ];

  return (
    <div>
      <Navbar />

      <div className="admin-container">

        {/* HEADER */}
        <div className="admin-header">
          <h1>🛠️ Admin Dashboard</h1>
          <p>Manage your Smart AI E-Commerce platform</p>
        </div>

        {/* STATS CARDS */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <div className="actions-section">
          <h2>⚡ Quick Actions</h2>

          <div className="actions-grid">
            {actions.map((action, index) => (
              <button key={index} className={`action-btn ${action.color}`}>
                {action.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;