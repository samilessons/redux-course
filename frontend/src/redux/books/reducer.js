import * as actionTypes from "./actionTypes";

const initialState = [
  {
    id: "1",
    title: "Book 1",
    author: "Author 1"
  },
  {
    id: "2",
    title: "Book 2",
    author: "Author 2"
  },
  {
    id: "3",
    title: "Book 3",
    author: "Author 3"
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;