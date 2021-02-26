import React, { useState, useEffect, useContext, createContext } from "react";
import { firebase, auth, db } from "../config/firebase";

const authContext = createContext();
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useContextData = () => {
  console.log("useAuth");
  return useContext(authContext);
};
function useProvideAuth() {
  const [context, setContext] = useState(null);
  return {
    context,
    setContext,
  };
}
