import React from "react";

function Register() {
  return (
    <div className="page">
      <div className="container card-ui">
        <h2 className="title">Register</h2>

        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />

        <button className="btn">Create Account</button>
      </div>
    </div>
  );
}

export default Register;