
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

function AdminLayout({ children }) {
  return (
    <div className="admin-container">

      <AdminSidebar />

      <div className="admin-main">

        <AdminNavbar />

        {children}

      </div>

    </div>
  );
}

export default AdminLayout;
