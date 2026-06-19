
import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "Pallavi Narsinge",
    email: "pallavi@gmail.com",
    phone: "9876543210",
    address: "Latur, Maharashtra",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    alert("Profile Updated Successfully");
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/200"
          alt="profile"
          className="profile-image"
        />

        <h2>My Profile</h2>

        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <textarea
          name="address"
          value={user.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <button
          className="save-btn"
          onClick={saveProfile}
        >
          Save Profile
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;
