import AdminLayout from "../layouts/AdminLayout";

function Dashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <div style={{ background: "#3b82f6", color: "white", padding: "20px" }}>
          <h2>120</h2>
          <p>Products</p>
        </div>

        <div style={{ background: "#22c55e", color: "white", padding: "20px" }}>
          <h2>450</h2>
          <p>Orders</p>
        </div>

        <div style={{ background: "#f97316", color: "white", padding: "20px" }}>
          <h2>300</h2>
          <p>Users</p>
        </div>

        <div style={{ background: "#8b5cf6", color: "white", padding: "20px" }}>
          <h2>₹8,75,000</h2>
          <p>Revenue</p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;