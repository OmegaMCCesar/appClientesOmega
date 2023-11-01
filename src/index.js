import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'


const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} redirectUri={window.location.origin}>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </Auth0Provider>
);


