import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "MyModels";
import { userDataState } from "./types";

export const fetchProfileData = createAsyncThunk<userDataState, User>('profile/fetchProfileData', async (params) => {
  try {
    const { access_token } = params
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