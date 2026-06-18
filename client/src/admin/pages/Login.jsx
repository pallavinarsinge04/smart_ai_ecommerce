import React from "react";

function Login() {
  return (
    <div className="page">
      <div className="container card-ui">
        <h2 className="title">Login</h2>

        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />

        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Login;