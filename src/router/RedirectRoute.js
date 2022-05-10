import { Navigate } from "react-router-dom";

const RedirectRoute = () => {
  
  const password = localStorage.getItem("password");
  const email = localStorage.getItem("email");

  if (password && email) {
    return <Navigate to="/search" />;
  }
  return <Navigate to="/login" />;
};
export default RedirectRoute;
