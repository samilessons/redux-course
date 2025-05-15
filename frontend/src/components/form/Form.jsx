import { useState } from "react";
import { useDispatch } from "react-redux";

import createBookWithID from "../../utils/createBookWithID";
import { addBook } from "../../redux/books/actionCreators";
import data from "../../data/books.json";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author })));
      setTitle("");
      setAuthor("");
    }
  };

  const handleAddRandonBook = () => {
    dispatch(addBook(createBookWithID(data[Math.floor(Math.random() * data.length)])));
  };

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl text-center">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Book Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
          placeholder="Book Author"
        />
        <div className="flex gap-4 max-lg:flex-wrap">
          <button
            type="submit"
            className="max-md:basis-full max-lg:basis-1/3 flex-1 bg-emerald-600 hover:bg-emerald-500 transition-colors duration-300 text-white text-sm py-2 px-4 rounded-lg cursor-pointer"
          >
            Add Book
          </button>
          <button
            onClick={handleAddRandonBook}
            type="button"
            className="max-md:basis-full max-lg:basis-1/3 flex-1 bg-cyan-600 hover:bg-cyan-500 transition-colors duration-300 text-white text-sm py-2 px-4 rounded-lg cursor-pointer"
          >
            Random
          </button>
          <button
            type="button"
            className="max-md:basis-full max-lg:basis-1/3 flex-1 bg-[#007bff] text-white text-sm py-2 px-4 rounded-lg cursor-pointer hover:bg-[#0056b3] transition-colors duration-300"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;