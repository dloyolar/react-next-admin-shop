import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export const ProviderAuth = ({ children }) => {
  const auth = ProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser("login");
  };

  return {
    user,
    signIn,
  };
};
