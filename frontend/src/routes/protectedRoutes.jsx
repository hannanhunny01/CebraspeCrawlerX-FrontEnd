import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [token] = useContext(UserContext);

  return (
    <Route
      {...rest}
      element={token ? <Element /> : <Navigate to="/login" replace />} 
    />
  );
};

export default ProtectedRoute;
