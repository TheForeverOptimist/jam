import React from 'react';
import { Button } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import "./Login.css";

const provider = new GoogleAuthProvider();

function Login() {
  const signIn = () => {
      signInWithPopup(auth, provider)
          .then(() => {
              console.log("Signed in successfully.");
          })
          .catch((error) => {
              console.error(error);
          });
  };

  return (
      <div className="login">
          <div className="login_logo">
              <img src="https://static.vecteezy.com/system/resources/previews/001/428/545/original/jar-with-strawberry-jam-free-vector.jpg" alt="jam" />
          </div>

          <Button onClick={signIn}>Sign In</Button>
      </div>
  );
}

export default Login;