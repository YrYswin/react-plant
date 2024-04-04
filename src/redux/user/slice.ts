import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "./asyncActions";
import { userDataState, userSliceState, Status } from "./types";

const initialState: userSliceState = {
  data: null,
  status: Status.LOADING,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<userDataState>) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.status = Status.ERROR;
        // state.error = action.error.message;
      })
  },
});

export default profileSlice.reducer