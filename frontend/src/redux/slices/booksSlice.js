import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Book 1",
    author: "Author 1",
    isFavorite: false
  },
  {
    id: "2",
    title: "Book 2",
    author: "Author 2",
    isFavorite: true
  },
  {
    id: "3",
    title: "Book 3",
    author: "Author 3",
    isFavorite: false
  }
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => { state.push(action.payload) },
    deleteBook: (state, action) => state.filter(book => book.id !== action.payload),
    toggleFavorite: (state, action) => state.map(book => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)
  }
});

// Action Creators
export const {
  addBook,
  deleteBook,
  toggleFavorite
} = booksSlice.actions;

// State
export const selectState = state => state.books;

export default booksSlice.reducer;