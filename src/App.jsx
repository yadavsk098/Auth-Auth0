import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>LogIn + Signup</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on Signup oR login
      </p>
      <button className="btn">Signup</button>
      <button className="btn">Login</button>
    </>
  );
}

export default App;
