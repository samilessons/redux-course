import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { addBook } from "../../redux/books/actionCreators";
import data from "../../data/books.json";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook({ id: uuidv4(), title, author }));
      setTitle("");
      setAuthor("");
    }
  };

  const handleAddRandonBook = () => {
    const rndIndex = Math.floor(Math.random() * data.length);
    const rndBook = data[rndIndex];
    dispatch(addBook({ ...rndBook, id: uuidv4() }));
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
            className="max-md:basis-full max-lg:basis-1/3 flex-1 bg-[#007bff] text-white text-sm py-2 px-4 rounded-lg cursor-pointer hover:bg-[#0056b3] transition-colors duration-300"
          >
            Add Book
          </button>
          <button
            onClick={handleAddRandonBook}
            type="button"
            className="max-md:basis-full max-lg:basis-1/3 flex-1 bg-[#007bff] text-white text-sm py-2 px-4 rounded-lg cursor-pointer hover:bg-[#0056b3] transition-colors duration-300"
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