import React from 'react';
import TextField from '@mui/material/TextField/TextField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { emailValidation, passwordValidation } from './validation'

import './Authorization.scss'
import { useAppDispatch } from '../../redux/store';

import { fetchGetProfile, fetchLoginAsync } from '../../redux/profile/asyncAction';
import { tokensState, userLoginState } from '../../redux/profile/types';

type LoginProps = {
  closePopup: () => void;
}

export const Login: React.FC<LoginProps> = ({ closePopup }) => {
  const dispatch = useAppDispatch()
  const { handleSubmit, control, formState: { errors } } = useForm<userLoginState>()


  const onLogin: SubmitHandler<userLoginState> = async (data) => {
    const tokens = await dispatch(fetchLoginAsync(data))
    console.log(tokens)
    if (tokens) {
      const typedTokens = tokens.payload as tokensState;
      dispatch(fetchGetProfile(typedTokens));
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