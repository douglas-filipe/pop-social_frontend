import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import {
  AuthProviderData,
  ContextProp,
  DataForm,
} from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const [userId, setUserId] = useState<string>(
    localStorage.getItem("@pop/userId") || ""
  );
  const [token, setToken] = useState<string>(
    localStorage.getItem("@pop/token") || ""
  );

  const reqLogin = async (data: DataForm) => {
    const response = api.post("/users/register", { data });
    console.log(response);
  };

  return (
    <AuthContext.Provider
      value={{ setToken, userId, reqLogin, token, setUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
