import * as actionTypes from "./actionTypes";

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
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case actionTypes.TOGGLE_FAVORITE:
      return state.map(book => book.id === action.payload ? { ...book, isFavorite: !book.isFavorite } : book);
    default:
      return state;
  }
};

export default booksReducer;