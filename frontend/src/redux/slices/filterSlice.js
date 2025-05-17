import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: ""
};

const filteredSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // return { ...state, title: action.payload };
      state.title = action.payload
    },
    resetFilters: () => initialState
  }
});

// Action Creators
export const { setTitleFilter, resetFilters } = filteredSlice.actions;

// State
export const selectTitleFilter = state => state.filter.title;

export default filteredSlice.reducer;