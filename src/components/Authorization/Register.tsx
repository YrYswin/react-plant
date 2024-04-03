import React from 'react';
import TextField from '@mui/material/TextField/TextField';

import './Authorization.css'

export const Register: React.FC = () => {
  return (
    <div className="register">
      <h3>Enter your email and password to register.</h3>
      <form className="inputs">
        <TextField
          id="outlined-basic" label="User Name" variant="outlined"
        />

        <TextField
          id="outlined-basic" label="Email" variant="outlined"
        />

        <TextField
          id="outlined-basic" label="Password" variant="outlined"
        />

        <button type="submit" className="authorizationBtn">
          Register
        </button>
      </form>

      <p className="or">Or register with</p>
    </div>
  );
};