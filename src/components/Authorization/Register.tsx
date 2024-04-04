import React from 'react';
import { useAppDispatch } from '../../redux/store';
import TextField from '@mui/material/TextField/TextField';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { emailValidation, passwordValidation } from './validation'
import { registerAsync } from '../../redux/auth/slice';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import './Authorization.scss'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export type RegisterForm = {
  name: string,
  email: string,
  password: string,
  passwordConf: string,
  avatar: string,
}

const DEFAULT_AVATAR = 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png'

export const Register: React.FC = () => {
  const dispatch = useAppDispatch()
  const [avatar, setAvatar] = React.useState<string>(DEFAULT_AVATAR)
  const { handleSubmit, control, formState: { errors } } = useForm<RegisterForm>()

  const onRegister: SubmitHandler<RegisterForm> = async (data) => {
    dispatch(registerAsync({ ...data, avatar }))
  }

  const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file) {
      setAvatar(file[0].name);
    }
  };

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

        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
        // startIcon={}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>

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
};