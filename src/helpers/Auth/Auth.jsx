import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (user?.email) {
    return <Outlet />;
  }

  return <Navigate to={"/"} />;
};

export default Auth;
