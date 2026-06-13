import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Admin Panel</h2>

      <hr />

      <p>
        <Link to="/admin/dashboard" style={{ color: "white" }}>
          Dashboard
        </Link>
      </p>

      <p>
        <Link to="/admin/products" style={{ color: "white" }}>
          Products
        </Link>
      </p>

      <p>
        <Link to="/admin/orders" style={{ color: "white" }}>
          Orders
        </Link>
      </p>

      <p>
        <Link to="/admin/users" style={{ color: "white" }}>
          Users
        </Link>
      </p>

      <p>
        <Link to="/admin/analytics" style={{ color: "white" }}>
          Analytics
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;