import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { CartItem, CartSliceState } from "./types";

const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: 'plantCart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find(obj => obj.id === action.payload)
      state.items = state.items.filter((obj) => obj.count !== 0)
      if (findItem) {
        findItem.count--
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    addItemFullPlant(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id)

      if (findItem) {
        findItem.count += action.payload.count
      } else {
        state.items.push({
          ...action.payload,
        })
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    }
  },
});


export const { addItem, removeItem, minusItem, clearItems, addItemFullPlant } = cartSlice.actions;

export default cartSlice.reducer;