import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  // After successful API login

  localStorage.setItem("token", "userLoggedIn");

  navigate("/home");
};