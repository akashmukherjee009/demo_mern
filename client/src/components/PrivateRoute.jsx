// PrivateRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import Home from './Home';

const PrivateRoute = ({ element: Element, ...props }) => {
  // Check if the user is authenticated (you can modify this logic based on your token validation)
  const isAuthenticated = !!localStorage.getItem('authToken');

  // If authenticated, render the passed element, else navigate to the login page
  return isAuthenticated ? (
    <Home />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
