import React from 'react';
import TextField from '@mui/material/TextField/TextField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { emailValidation, passwordValidation } from './validation'

import './Authorization.scss'
import { RootState, useAppDispatch } from '../../redux/store';
import { loginAsync } from '../../redux/auth/slice';
import { useSelector } from 'react-redux';

type RegisterForm = {
  email: string,
  password: string,
}

type Login = {
  closePopup: () => void;
}

export const Login: React.FC<Login> = ({ closePopup }) => {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()
  const { handleSubmit, control, formState: { errors } } = useForm<RegisterForm>()

  const onLogin: SubmitHandler<RegisterForm> = (data) => {
    dispatch(loginAsync(data))
    if (user) {
      closePopup()
    }
  }

  return (
    <div className="signUp">
      <h3>Enter your username and password to login.</h3>

      <form className="inputs" onSubmit={handleSubmit(onLogin)}>

        <Controller
          control={control}
          rules={emailValidation}
          name='email'
          render={(({ field }) => (
            <TextField
              id="email" label="Email" variant="outlined"
              onChange={(e) => field.onChange(e)}
              error={!!errors.email?.message}
              helperText={errors?.email?.message}
              autoComplete='email'
            />
          ))}
        />

        <Controller
          control={control}
          rules={passwordValidation}
          name='password'
          render={(({ field }) => (
            <TextField
              id="password" label="Password" variant="outlined"
              onChange={(e) => field.onChange(e)}
              error={!!errors.password?.message}
              helperText={errors?.password?.message}
              type='password'
            />
          ))}
        />

        <span>Forgot Password?</span>

        <button
          className="authorizationBtn"
          type="submit"
        >Login</button>
      </form>

      <p className="or">Or login with</p>
    </div>
  );
};