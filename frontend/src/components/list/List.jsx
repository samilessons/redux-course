import { useSelector } from "react-redux";
import { selectTitleFilter, selectAuthorFilter, selectonlyFavoriteFilter } from "../../redux/slices/filterSlice";

import ListItem from "../list-item/ListItem";

const List = () => {
  const books = useSelector(state => state.books);
  const booksByFilteredTitle = useSelector(selectTitleFilter);
  const booksByFilteredAuthor = useSelector(selectAuthorFilter);
  const booksByFilteredOnlyFavorite = useSelector(selectonlyFavoriteFilter)
  
  const filteredBooks = books.filter(book => {
    const matchesTitle = book.title.toLowerCase().includes(booksByFilteredTitle.toLowerCase());
    const matchesAuthor = book.author.toLowerCase().includes(booksByFilteredAuthor.toLowerCase());
    const matchesOnlyFavorite = booksByFilteredOnlyFavorite ? book.isFavorite : true;
    return matchesTitle && matchesAuthor && matchesOnlyFavorite;
  });

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg min-h-[145px]">
      <h2 className="text-center">Book List</h2>
      <ul className="p-0 m-4 max-h-[520px] overflow-y-auto">
        {
          !filteredBooks.length ?
            <p className="text-center">No books available</p>
            :
            filteredBooks.map(book => <ListItem
              key={book.id}
              book={book}
              booksByFilteredTitle={booksByFilteredTitle}
              booksByFilteredAuthor={booksByFilteredAuthor}
            />
          )
        }
      </ul>
    </div>
  );
};

export default List;