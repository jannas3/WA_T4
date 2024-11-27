"use client";

import React, { createContext, useState } from "react";
import { User } from "../types/user";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthProviderContextProps = {
  usuario: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (email: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthProviderContextProps>({
  usuario: null,
  setUser: () => {},
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [usuario, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
