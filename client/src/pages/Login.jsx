import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "./../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      // optional redirect
      navigate("/");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome Back 👋</h2>
        <p>Login to continue</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {/* REGISTER LINK */}
        <p style={styles.registerText}>
          Don’t have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial",
  },

  card: {
    width: "350px",
    background: "white",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "15px",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "12px",
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  registerText: {
    marginTop: "15px",
    fontSize: "14px",
  },

  link: {
    color: "#667eea",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Login;