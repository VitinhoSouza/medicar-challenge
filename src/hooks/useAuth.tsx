import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  auth: {
    token: string;
  };
  setAuthLS: (newAuth: {token: string}) => void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("@Medicar:token") || ""
  });

  const setAuthLS = (newAuth: {token: string}) => {
    setAuth(newAuth);
    localStorage.setItem("@Medicar:token", newAuth.token);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuthLS }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}