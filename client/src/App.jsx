import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Smart AI Ecommerce 🚀</h1>

      <h2>Register</h2>
      <Register />

      <hr />

      <h2>Login</h2>
      <Login />
    </div>
  );
}