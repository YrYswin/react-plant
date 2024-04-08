import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { profileState, userRegisterState, userLoginState, tokensState } from "./types";
import { setError } from "./slice";
import AuthService from './auth.service';

export const fetchRegisterAsync = createAsyncThunk<profileState, userRegisterState>('profile/fetchRegister',
  async (params: userRegisterState, thunkApi) => {
    console.log(params)
    if (params.password !== params.passwordConf) {
      thunkApi.dispatch(setError(`Your password doesn't match`));
      return thunkApi.rejectWithValue(`Your password doesn't match`);
    }
    try {
      const response = await AuthService.register(
        params.name,
        params.email,
        params.password,
        params.avatar,
      );
      console.log(response);
      if (response) {
        return response;
      }
    } catch (_error) {
      const error = _error as Error | AxiosError;
      console.log(error);
      if (axios.isAxiosError(error)) {
        thunkApi.dispatch(setError(error.response?.data.message));
        return thunkApi.rejectWithValue(error.response?.data.message);
      }
      thunkApi.dispatch(setError(error.message));
      return thunkApi.rejectWithValue(error.message);
    }
  })

export const fetchLoginAsync = createAsyncThunk<profileState, userLoginState>('profile/fetchLogin',
  async (params: userLoginState, thunkApi) => {
    // console.log(userCredentials);
    try {
      const response = await AuthService.login(
        params.email,
        params.password
      );
      if (response.access_token) {
        return response;
      }
    } catch (_error) {
      const error = _error as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        thunkApi.dispatch(setError(error.response?.data.message));
        return thunkApi.rejectWithValue(error.response?.data.message);
      }
      thunkApi.dispatch(setError(error.message));
      return thunkApi.rejectWithValue(error.message);
    }
  })

export const fetchGetProfile = createAsyncThunk<profileState, tokensState>('profile/fetchProfileData', async (tokens) => {
  try {
    const { access_token } = tokens
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });

    if (!data) {
      throw new Error('Ошибка сети или сервера');
    }

    console.log(data)
    return data;
  } catch (error) {
    throw error;
  }
}
);

export const fetchLogout = createAsyncThunk('profile/fetchLogout', async () => {
  AuthService.logout()
})