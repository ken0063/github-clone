/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import LoginGithub from 'react-login-github';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import './_LoginPage.scss';

const LoginPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onSuccess = async (response) => {
    if (response?.code != null || response?.code !== 'undefined') {
      setLoading(true);
      const res = await axios.post(
        'https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/auth',
        { code: response.code },
      );
      if (res.data.message === 'success') {
        localStorage.setItem('api-key', res.data.data.access_token);
      }
      history.push('/home');

      setLoading(false);
    }
  };
  const onFailure = (response) => console.error(response);

  return (
    <div className="login-page">
      {loading ? (
        <div className="loading">
          <Loader type="Oval" color="#4980c4" height={80} width={80} />
        </div>
      ) : (
        <LoginGithub
          className="button"
          clientId="4f262cc9e20d3043da02"
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText=" Login to Github"
        />
      )}
    </div>
  );
};

export default LoginPage;
