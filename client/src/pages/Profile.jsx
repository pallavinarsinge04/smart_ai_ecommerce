import React from "react";

function Profile() {
  // sample user data (you can replace with API later)
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Customer",
    joined: "Jan 2026",
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>My Profile 👤</h1>

      <div style={styles.card}>
        {/* Avatar */}
        <div style={styles.avatar}>
          {user.name.charAt(0)}
        </div>

        {/* Info */}
        <h2>{user.name}</h2>
        <p style={styles.text}>{user.email}</p>
        <p style={styles.text}>Role: {user.role}</p>
        <p style={styles.text}>Joined: {user.joined}</p>

        {/* Stats */}
        <div style={styles.stats}>
          <div style={styles.box}>
            <h3>12</h3>
            <p>Orders</p>
          </div>

          <div style={styles.box}>
            <h3>5</h3>
            <p>Wishlist</p>
          </div>

          <div style={styles.box}>
            <h3>3</h3>
            <p>Coupons</p>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.actions}>
          <button style={styles.editBtn}>Edit Profile</button>
          <button style={styles.logoutBtn}>Logout</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh",
    textAlign: "center",
  },

  heading: {
    marginBottom: "20px",
  },

  card: {
    maxWidth: "400px",
    margin: "auto",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },

  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#007bff",
    color: "white",
    fontSize: "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    marginBottom: "15px",
  },

  text: {
    color: "gray",
    margin: "5px 0",
  },

  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  box: {
    background: "#f0f0f0",
    padding: "10px",
    borderRadius: "10px",
    width: "30%",
  },

  actions: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },

  editBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#28a745",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },

  logoutBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#dc3545",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Profile;