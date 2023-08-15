import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  
  user ? (return children) : return <Redirect to='/login' />;
};
