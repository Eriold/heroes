import React, { useContext } from 'react';
import { AutContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AutContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '1/';
    dispatch({
      type: types.login,
      payload: {
        name: 'Daniel',
      },
    });
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
