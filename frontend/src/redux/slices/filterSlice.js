import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false
};

const filteredSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => { state.title = action.payload },
    setAuthorFilter: (state, action) => { state.author = action.payload },
    setOnlyFavoriteFilter: (state) => { state.onlyFavorite = !state.onlyFavorite },
    resetFilters: () => initialState
  }
});

// Action Creators
export const {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters
} = filteredSlice.actions;

// State
export const selectTitleFilter = state => state.filter.title;
export const selectAuthorFilter = state => state.filter.author;
export const selectonlyFavoriteFilter = state => state.filter.onlyFavorite;

export default filteredSlice.reducer;