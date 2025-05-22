import { FaTrashAlt, FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";

// import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { deleteBook, toggleFavorite } from "../../redux/slices/booksSlice";

import markedMatch from "../../utils/marketMatch";

const ListItem = (
  {
    book: { title, author, id, isFavorite, source },
    booksByFilteredTitle,
    booksByFilteredAuthor
  }
) => {
  const dispatch = useDispatch();

  const handleDeleteBook = id => dispatch(deleteBook(id));
  const handleToggleFavorite = id => dispatch(toggleFavorite(id));

  return (
    <li className="flex justify-between items-center py-2 mb-2 rounded-lg px-4 border-b border-gray-300 bg-white hover:bg-[#dbe4f8] transition-colors duration-300">
      <div>
        <h3>
          <span className="text-xs mr-2">Title:</span>
          {markedMatch(title, booksByFilteredTitle)}
        </h3>
        <p>
          <span className="text-xs mr-2">Author:</span>
          <strong>{markedMatch(author, booksByFilteredAuthor)}</strong>
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {source}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleDeleteBook(id)}
          className="px-3 py-2 bg-red-700  hover:bg-red-600 transition-colors duration-300 text-white cursor-pointer rounded-lg"
        >
          <FaTrashAlt />
        </button>
        <button
          onClick={() => handleToggleFavorite(id)}
          className={`${isFavorite ? "bg-amber-400  hover:bg-amber-300" : "bg-gray-400 hover:bg-gray-300"} px-3 py-2  transition-colors duration-300 text-white cursor-pointer rounded-lg`}
        >
          <FaBookmark />
        </button>
      </div>
    </li>
  );
};

export default ListItem;