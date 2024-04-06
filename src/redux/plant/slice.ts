import { createSlice } from "@reduxjs/toolkit";
import { fetchPlant } from "./asyncActions";
import { PlantSliceState, Status } from './types'

const initialState: PlantSliceState = {
  items: [],
  status: Status.LOADING
}

const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlant.pending, (state) => {
        state.items = []
        state.status = Status.LOADING
      })
      .addCase(fetchPlant.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = Status.SUCCESS
      })
      .addCase(fetchPlant.rejected, (state) => {
        state.items = []
        state.status = Status.ERROR
      })
  }
})

export const { setItems } = plantSlice.actions
export default plantSlice.reducer