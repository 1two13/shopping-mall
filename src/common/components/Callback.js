import React, { useEffect, useContext } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "./AuthManager";

function Callback() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token")?.replaceAll(" ", "+");

  const { setToken } = useContext(AuthContext);

  useEffect(() => {
    setToken(token);
    localStorage.setItem("token", token);
  }, []);

  return <Navigate to="/" replace />;
}

export default Callback;
