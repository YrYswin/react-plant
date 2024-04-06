import { PayloadAction, createSlice, CaseReducer, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchProfileData } from "./asyncActions";
import { userDataState, userSliceState, Status } from "./types";

type FetchProfileDataReducer = CaseReducer<userSliceState, PayloadAction<userDataState>>;

interface ExtraReducersBuilder {
  addCase: <S>(actionCreator: any, reducer: (state: userSliceState, action: PayloadAction<S>) => void) => void;
}

const initialState: userSliceState = {
  data: loadProfileFromLocalStorage(),
  status: Status.LOADING,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = Status.LOADING;
      state.error = null;
      localStorage.removeItem('profile');
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<userSliceState> & ExtraReducersBuilder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
        localStorage.setItem('profile', JSON.stringify(action.payload));
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.status = Status.ERROR;
        // state.error = action.error.message;
      })
  },
});

export const { logout } = profileSlice.actions

export default profileSlice.reducer;

function loadProfileFromLocalStorage(): userDataState | null {
  const profileData = localStorage.getItem('profile');
  return profileData ? JSON.parse(profileData) : null;
}
