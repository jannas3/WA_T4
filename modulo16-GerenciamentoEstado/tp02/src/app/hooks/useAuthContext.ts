import { useContext } from "react";
import { AuthContext } from "../state/AuthProvider";

export const useAuthContext = () => {
  const userContext = useContext(AuthContext);
  return userContext;
};
