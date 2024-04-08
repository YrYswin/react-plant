import { ActionReducerMapBuilder, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchRegisterAsync, fetchLoginAsync, fetchLogout, fetchGetProfile } from "./asyncAction";
import { profileDataState, profileState, Status, tokensState } from "./types";
import { RootState } from "../store";
import LSservise from './localStorage.service'

interface ExtraReducersBuilder {
  addCase: <S>(actionCreator: any, reducer: (state: profileState, action: PayloadAction<S>) => void) => void;
}

const profileDataFromLS: profileDataState = LSservise.getProfile()
const tokensFromLS: tokensState = LSservise.getTokens()

const initialState: profileState = {
  data: profileDataFromLS,
  tokens: tokensFromLS, // Обновляем tokens здесь
  status: Status.LOADING,
  error: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<profileState> & ExtraReducersBuilder) {
    builder
      .addCase(fetchLoginAsync.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.status = Status.SUCCESS;
        state.tokens = payload;
        state.error = 'none';
      })
      .addCase(fetchLoginAsync.rejected, (state) => {
        state.status = Status.ERROR;
      })

      .addCase(fetchRegisterAsync.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.status = Status.SUCCESS;
        state.data = payload;
        state.error = 'none';
      })

      .addCase(fetchGetProfile.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchGetProfile.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.status = Status.SUCCESS;
        state.data = payload.data;
        state.error = 'none';
        localStorage.setItem('profile', JSON.stringify(payload)); // Сохраняем профиль в localStorage
      })
      .addCase(fetchGetProfile.rejected, (state, action) => {
        state.status = Status.ERROR;
      })

      .addCase(fetchLogout.fulfilled, (state) => {
        state.status = Status.SUCCESS;
        state.data = null;
        state.tokens = null;
        state.error = 'none';
      });
  },
})
export const selectProfileData = (state: RootState) => state.profile.data;
export const selectTokens = (state: RootState) => state.profile.tokens;

export const { setError } = profileSlice.actions

export default profileSlice.reducer;
