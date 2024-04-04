import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import authService from './auth.service';
import tokenService from './token.service';
import axios, { AxiosError } from 'axios';
import { AuthState, User, UserCredentials, UserRegister } from 'MyModels';

const user: User = tokenService.getUser();
const initialState: AuthState = user.access_token
  ? {
    isLoggedIn: true,
    user: user,
    error: ''
  }
  : {
    isLoggedIn: false,
    user: { access_token: '', refresh_token: '' },
    error: ''
  };

export const registerAsync = createAsyncThunk<AuthState, UserRegister>(
  'auth/register',
  async (userRegister: UserRegister, thunkApi) => {
    console.log(userRegister)
    if (userRegister.password !== userRegister.passwordConf) {
      thunkApi.dispatch(setError(`Your password doesn't match`));
      return thunkApi.rejectWithValue(`Your password doesn't match`);
    }
    try {
      const response = await authService.register(
        userRegister.name,
        userRegister.email,
        userRegister.password,
        userRegister.avatar,
      );
      console.log(response);
      if (response.status === 200) {
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
  }
);

export const loginAsync = createAsyncThunk<AuthState, UserCredentials>(
  'auth/login',
  async (userCredentials: UserCredentials, thunkApi) => {
    // console.log(userCredentials);
    try {
      const response = await authService.login(
        userCredentials.email,
        userCredentials.password
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
  }
);

export const logoutAsync = createAsyncThunk('auth/logout', async () => {
  authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    refresh_token: (state, { payload }) => {
      state.user.access_token = payload.access_token;
      state.user.refresh_token = payload.refresh_token;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload.user;
        state.error = '';
      })
      .addCase(loginAsync.rejected, (state) => {
        state.isLoggedIn = false;
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.error = '';
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.user = { access_token: '', refresh_token: '' };
        state.error = '';
      });
  }
});

export const { setError, refresh_token } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
