import React from 'react';
import TextField from '@mui/material/TextField/TextField';

import './Authorization.css'

export const SignUp: React.FC = () => {
  return (
    <div className="signUp">
      <h3>Enter your username and password to login.</h3>

      <form className="inputs">

        <TextField
          id="outlined-basic" label="Email" variant="outlined"
        />

        <TextField
          id="outlined-basic" label="Password" variant="outlined"
        />

        <span>Forgot Password?</span>

        <button className="authorizationBtn" type="submit">Login</button>
      </form>

      <p className="or">Or login with</p>
    </div>
  );
};