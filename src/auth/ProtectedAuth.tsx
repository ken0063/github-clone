/* eslint-disable no-undef */
/* eslint-disable no-console */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
// import Loader from '../components/loader/Loader';

export const ProtectedAuth = ({ children, ...rest }) => {
  const token = localStorage.getItem('api-key');

  if (!token || token == null || token == undefined) {
    return <LoginPage />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedAuth;
