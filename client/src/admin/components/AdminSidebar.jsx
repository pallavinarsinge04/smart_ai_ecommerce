
import { Link } from "react-router-dom";
import "./admin.css";

function AdminSidebar() {
  return (
    <div className="sidebar">

      <h2>🛍️ Admin</h2>

      <Link to="/admin/dashboard">Dashboard</Link>

      <Link to="/admin/products">Products</Link>

      <Link to="/admin/add-product">Add Product</Link>

      <Link to="/admin/orders">Orders</Link>

      <Link to="/admin/users">Users</Link>

      <Link to="/admin/categories">Categories</Link>

      <Link to="/admin/coupons">Coupons</Link>

      <Link to="/admin/reviews">Reviews</Link>

      <Link to="/admin/analytics">Analytics</Link>

      <Link to="/admin/settings">Settings</Link>

    </div>
  );
}

export default AdminSidebar;

