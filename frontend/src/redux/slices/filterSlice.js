import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: ""
};

const filteredSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => { state.title = action.payload },
    setAuthorFilter: (state, action) => { state.author = action.payload },
    resetFilters: () => initialState
  }
});

// Action Creators
export const { setTitleFilter, setAuthorFilter, resetFilters } = filteredSlice.actions;

// State
export const selectTitleFilter = state => state.filter.title;
export const selectAuthorFilter = state => state.filter.author;

export default filteredSlice.reducer;