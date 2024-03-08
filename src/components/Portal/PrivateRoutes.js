import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/PLogin" replace={false} />;
  } else return children;
};

export default PrivateRoutes;

