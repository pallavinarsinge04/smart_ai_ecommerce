import AdminLayout from "../components/AdminLayout";

function Dashboard() {
  return (
    <AdminLayout>

      <h1>Dashboard</h1>

      <div className="dashboard-cards">

        <div className="card">
          <h2>120</h2>
          <p>Products</p>
        </div>

        <div className="card">
          <h2>350</h2>
          <p>Orders</p>
        </div>

        <div className="card">
          <h2>150</h2>
          <p>Users</p>
        </div>

        <div className="card">
          <h2>₹5,00,000</h2>
          <p>Revenue</p>
        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;