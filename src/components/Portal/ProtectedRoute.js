import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const ProtectedRoute = ({ children }) => {
    console.log(children,"children")
    const { currentUser } = useAuth();
    console.log(currentUser,"user");
    return currentUser ? children : <Navigate to="/PLogin" replace />;
};
export default ProtectedRoute;