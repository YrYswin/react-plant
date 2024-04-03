import { RootState } from "../store";


export const selectCart = (state: RootState) => state.plantCart;

export const selectCartItemById = (id: number) => (state: RootState) => state.plantCart.items.find((obj) => obj.id === id)