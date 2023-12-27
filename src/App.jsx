import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const [count, setCount] = useState(0);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  

  return (
    <>
      <div></div>
      <h1>LogIn + Signup</h1>
      
      <div className="card"></div>
      <p className="read-the-docs">Click on Signup oR login</p>
      {isAuthenticated ? (
        <>
        
        <h1>Welcome </h1>
        <h2>{user.name}</h2>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="btn"
        >
          Logout
        </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} className="btn">
          Signup/Login
        </button>

      )}
    </>
  );
      
}

export default App;
