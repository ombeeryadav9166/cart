import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NonProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
console.log(isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default NonProtectedRoute;
