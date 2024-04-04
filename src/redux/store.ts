import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import plant from './plant/slice'
import filter from './filter/slice'
import plantCart from './cart/slice'
import authReducer from './auth/slice';
import profile from './user/slice'

export const store = configureStore({
  reducer: {
    plant,
    filter,
    plantCart,
    profile,
    auth: authReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

