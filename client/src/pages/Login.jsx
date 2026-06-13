import { useState } from "react";
import API from "./../../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      alert(res.data.message);

      // SAVE TOKEN
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}