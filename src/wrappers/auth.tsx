import { Navigate, Outlet } from "umi";

export default () => {
  const jwt = localStorage.getItem("jwtToken");
  if (jwt) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
