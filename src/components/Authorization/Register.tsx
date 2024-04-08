import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '../../redux/store';
import { emailValidation, passwordValidation } from './validation'
import { fetchRegisterAsync } from '../../redux/profile/asyncAction';

import TextField from '@mui/material/TextField/TextField';
import './Authorization.scss'
import { userRegisterState } from '../../redux/profile/types';

type RegisterProps = {
  closePopup: () => void,
}

const avatar = 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png'

export const Register: React.FC<RegisterProps> = ({ closePopup }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { handleSubmit, control, formState: { errors } } = useForm<userRegisterState>()

  const onRegister: SubmitHandler<userRegisterState> = async (data) => {
    const { payload } = await dispatch(fetchRegisterAsync({ ...data, avatar }))
    console.log(payload)
    if (payload) {
      closePopup()
      navigate('')
    }
    window.scrollTo(0, 0)
  }

  return (
    <div className="register">
      <h3>Enter your email and password to register.</h3>
      <form className="inputs" onSubmit={handleSubmit(onRegister)}>

        <Controller
          control={control}
          name='name'
          render={(({ field }) => (
            <TextField
              id="name" label="User Name" variant="outlined"
              onChange={(e) => field.onChange(e)}
              error={!!errors.name?.message}
              helperText={errors?.name?.message}
              autoComplete='name'
            />
          ))}
        />

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

        <Controller
          control={control}
          rules={passwordValidation}
          name='passwordConf'
          render={(({ field }) => (
            <TextField
              id="passwordConf" label="password Confirm" variant="outlined"
              onChange={(e) => field.onChange(e)}
              error={!!errors.passwordConf?.message}
              helperText={errors?.passwordConf?.message}
              type='password'
            />
          ))}
        />

        <button
          type="submit"
          className="authorizationBtn"
        >
          Register
        </button>
      </form>

      <p className="or">Or register with</p>
    </div>
  );
}
