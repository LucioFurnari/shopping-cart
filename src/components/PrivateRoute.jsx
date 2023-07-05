import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { userContext } from "./ShopContext";

function PrivateRoute () {
  const userInfo = useContext(userContext)

  return (
    userInfo.isSigned ? <Outlet /> : <Navigate  to='/'/>
  )
}

export default PrivateRoute