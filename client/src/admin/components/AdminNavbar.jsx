
import "./admin.css";

function AdminNavbar() {
  return (
    <div className="admin-navbar">

      <h2>Smart AI Ecommerce Admin Panel</h2>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>

    </div>
  );
}

export default AdminNavbar;

