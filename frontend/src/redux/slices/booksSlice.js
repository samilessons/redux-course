import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithID from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = [
  {
    id: "1",
    title: "Book 1",
    author: "Author 1",
    source: "initial",
    isFavorite: false
  },
  {
    id: "2",
    title: "Book 2",
    author: "Author 2",
    source: "initial",
    isFavorite: true
  },
  {
    id: "3",
    title: "Book 3",
    author: "Author 3",
    source: "initial",
    isFavorite: false
  }
];

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return await res.data;
    }

    catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => { state.push(action.payload) },
    randomBook: (state, action) => { state.push(action.payload) },
    deleteBook: (state, action) => state.filter(book => book.id !== action.payload),
    toggleFavorite: (state, action) => state.map(book => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book)
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithID(action.payload, "via api"));
      }
    });
  }
});

// Action Creators
export const {
  addBook,
  randomBook,
  deleteBook,
  toggleFavorite
} = booksSlice.actions;

// thunkFunction -> dispatch, getState
// export const thunkFunction = async (dispatch) => {
//   try {
//     const res = await axios.get("http://localhost:8888/random-book");
//     if (res?.data && res?.data.title && res?.data.author) {
//       dispatch(addBook(createBookWithID(res.data, "via api")));
//     }
//   }

//   catch (e) {
//     console.log(e);
//   }
// };

// State
export const selectState = state => state.books;

export default booksSlice.reducer;