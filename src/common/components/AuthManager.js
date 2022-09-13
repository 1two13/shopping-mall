import React, { useState } from "react";

function AuthManager({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  // console.log(children);

  return (
    <AuthContext.Provider
      value={{
        setToken,
        token,
        loginUrl:
          "http://ec2-54-180-89-108.ap-northeast-2.compute.amazonaws.com/auth/authorization/naver",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthManager;

export const AuthContext = React.createContext({});
