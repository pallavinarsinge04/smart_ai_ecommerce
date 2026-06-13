function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        background: "#2563eb",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h2>Smart AI Ecommerce Admin</h2>

      <button>Logout</button>
    </div>
  );
}

export default Navbar;