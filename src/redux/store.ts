import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import plant from './plant/slice'
import filter from './filter/slice'
import plantCart from './cart/slice'

export const store = configureStore({
  reducer: {
    plant,
    filter,
    plantCart,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
