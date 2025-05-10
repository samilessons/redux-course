import { useSelector } from "react-redux";

import ListItem from "../list-item/ListItem";

const List = () => {
  const books = useSelector(state => state.books);

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <h2 className="text-center">Book List</h2>
      <ul className="p-0 m-4">
        {
          !books.length ?
            <p className="text-center">No books available</p>
            :
            books.map(book => <ListItem key={book.id} book={book} />)
        }
      </ul>
    </div>
  );
};

export default List;