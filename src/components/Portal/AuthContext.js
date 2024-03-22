import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from "./MyFeatures/PChat/firebase"; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user.displayName, "display");
        setUserName(user.displayName);
        console.log(userName, "nameeeeeee");
      } else {
        setUserName(""); 
      }
      setCurrentUser(user);
    });
  }, []);
  

  return (
    <AuthContext.Provider value={{ currentUser,userName}}>
      {children}
    </AuthContext.Provider>
  );
};