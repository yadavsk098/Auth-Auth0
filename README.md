# React + Vite
# VSCODE POWER MODE Extentsion For FLmaes on typing !!!

1. module install karna hai 
---> npm install @auth0/auth0-react 

2. import Auth module with your client id in main.jsx and wrap your root component with an Auth0Provider
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

``` 

3. Add login to your application i.e in our APP.jsx page

```
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  //use these methods to get user data , is logged in or logged out
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;

```
