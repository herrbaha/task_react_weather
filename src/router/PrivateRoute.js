import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const password = localStorage.getItem("password");
  const email = localStorage.getItem("email");

  if (password && email) {
    return children;
  }
  return <Navigate to="/" />;
};
export default PrivateRoute;
