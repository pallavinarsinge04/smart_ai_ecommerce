import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Admin.css";

function Admin() {
  const [products, setProducts] = useState([
    "Smart Watch",
    "Wireless Earbuds",
    "Gaming Mouse",
  ]);

  const [orders, setOrders] = useState([
    { id: 101, customer: "Rahul", status: "Pending" },
    { id: 102, customer: "Amit", status: "Delivered" },
  ]);

  const [users, setUsers] = useState([
    "Rahul",
    "Amit",
    "Priya",
  ]);

  const addProduct = () => {
    const name = prompt("Enter Product Name");
    if (name) {
      setProducts([...products, name]);
      alert("✅ Product Added Successfully");
    }
  };

  const deleteProduct = () => {
    if (products.length === 0) {
      alert("No products available.");
      return;
    }

    const last = products[products.length - 1];

    setProducts(products.slice(0, -1));

    alert(`${last} Deleted`);
  };

  const manageOrders = () => {
    alert(
      `Total Orders : ${orders.length}

Pending Orders : ${
        orders.filter((o) => o.status === "Pending").length
      }

Delivered : ${
        orders.filter((o) => o.status === "Delivered").length
      }`
    );
  };

  const manageUsers = () => {
    alert(
      `Registered Users

${users.join("\n")}`
    );
  };

  const stats = [
    {
      title: "Total Users",
      value: users.length,
    },
    {
      title: "Total Products",
      value: products.length,
    },
    {
      title: "Total Orders",
      value: orders.length,
    },
    {
      title: "Revenue",
      value: "₹45,000",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="admin-container">

        <div className="admin-header">
          <h1>🛠️ Admin Dashboard</h1>
          <p>Manage your Smart AI E-Commerce platform</p>
        </div>

        {/* Statistics */}

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stat-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}

        <div className="actions-section">
          <h2>Quick Actions</h2>

          <div className="actions-grid">

            <button
              className="action-btn blue"
              onClick={addProduct}
            >
              ➕ Add Product
            </button>

            <button
              className="action-btn red"
              onClick={deleteProduct}
            >
              🗑️ Delete Product
            </button>

            <button
              className="action-btn green"
              onClick={manageOrders}
            >
              📦 Manage Orders
            </button>

            <button
              className="action-btn purple"
              onClick={manageUsers}
            >
              👤 Manage Users
            </button>

          </div>
        </div>

        {/* Product List */}

        <div className="list-card">
          <h2>Products</h2>

          {products.map((item, index) => (
            <p key={index}>• {item}</p>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Admin;