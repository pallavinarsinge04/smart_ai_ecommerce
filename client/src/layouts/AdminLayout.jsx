import React from "react";
import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "20px", background: "#F3E4C9" }}>
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;