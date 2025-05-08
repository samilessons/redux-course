import { useState } from "react";
import { useDispatch } from "react-redux";

import { addBook } from "../../redux/books/actionCreators";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook({ title, author }));
      setTitle("");
      setAuthor("");
    }
  }
  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl">Add a New Book</h2>
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
        <button  className="block w-full bg-[#007bff] text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-[#0056b3] transition-colors duration-300">
          Click Me
        </button>
      </form>
    </div>
  );
};

export default Form;