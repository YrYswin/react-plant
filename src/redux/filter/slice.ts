import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  currentPage: 1,
  categoryType: '',
  sortBy: 'price',
  sortRevers: 'asc',
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setCategoryType(state, action: PayloadAction<string>) {
      state.categoryType = action.payload
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload
    },
    setSortRevers(state, action: PayloadAction<string>) {
      state.sortRevers = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage)
      } else {
        state.currentPage = 1;
      }
    }
  },
});

export const {
  setCurrentPage,
  setCategoryType,
  setSortBy,
  setSortRevers,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;