# React + Vite

1. module install karna hai 
---> npm install @auth0/auth0-react 

2. import Auth mode and wrap your root component with an Auth0Provider
---> import { Auth0Provider } from '@auth0/auth0-react';

```
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-dzr178s2px8c4dbo.us.auth0.com"
    clientId="0IAWhmXdDbLD9l7hwYbaCcmyYevJ8o4y"
    authorizationParams=
    {{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);


4. Add login to your application

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;

```
