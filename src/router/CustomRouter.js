import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Search from "../components/Search";
import RedirectRoute from "./RedirectRoute";
import PrivateRoute from "./PrivateRoute";

export default function CustomRouter() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <Search />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<RedirectRoute />} />
    </Routes>
  );
}
