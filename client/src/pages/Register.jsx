import { useState } from "react";
import API from "./../../api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <br /><br />

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}