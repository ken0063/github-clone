/* eslint-disable no-console */
/* eslint-disable no-undef */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloRequestClient } from './utils/ApolloRequestClient';
import ScrollToTop from './utils/ScrollToTop';
import App from './App';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

ReactDOM.render(
  <ApolloRequestClient>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </ApolloRequestClient>,

  document.getElementById('root'),
);
