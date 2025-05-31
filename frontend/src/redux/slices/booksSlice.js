import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithID from "../../utils/createBookWithID";
import { setError } from "./errorSlice";

const initialState = {
  books: [
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
  ],
  loaderViaApi: false
}

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
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    randomBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      return { ...state, books: state.books.filter(book => book.id !== action.payload) }
    },
    toggleFavorite: (state, action) => {
      state.books.forEach(book => {
        if (book.id === action.payload) { 
          book.isFavorite = !book.isFavorite;
        }
      });
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.loaderViaApi = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.loaderViaApi = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithID(action.payload, "via api"));
      }
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.loaderViaApi = false;
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
export const selectBooksState = state => state.books.books;
export const selectLoadingState = state => state.books.loaderViaApi;

export default booksSlice.reducer;