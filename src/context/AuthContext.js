import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../utils/api'; 

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user data from the server
      loginUser()
        .then((userData) => {
          setUser(userData.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          localStorage.removeItem('token'); 
        });
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
