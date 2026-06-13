import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const isAdmin = true;

  return isAdmin ? children : <Navigate to="/login" />;
}

export default ProtectedAdmin;