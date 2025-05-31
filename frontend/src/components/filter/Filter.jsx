import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
  selectonlyFavoriteFilter
} from "../../redux/slices/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const stateOfTitle = useSelector(selectTitleFilter);
  const stateOfAuthor = useSelector(selectAuthorFilter);
  const stateOfOnlyFavorite = useSelector(selectonlyFavoriteFilter);

  const handleByTitle = (e) => dispatch(setTitleFilter(e.target.value));
  const handleByAuthor = (e) => dispatch(setAuthorFilter(e.target.value));
  const handleByOnlyFavorite = () => dispatch(setOnlyFavoriteFilter());
  const handleResetFilters = () => dispatch(resetFilters());

  return (
    <div className="flex flex-col gap-4 p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg">
      <div className="flex gap-4 max-lg:flex-wrap">
        <input
          onChange={handleByTitle}
          value={stateOfTitle}
          type="text"
          placeholder="Filter by title"
          className="px-4 py-2 border-1 border-gray-300 rounded-lg w-full"
        />
        <input
          onChange={handleByAuthor}
          value={stateOfAuthor}
          type="text"
          placeholder="Filter by Name"
          className="px-4 py-2 border-1 border-gray-300 rounded-lg w-full"
        />
      </div>
      <div className="flex items-center gap-4 justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            onChange={handleByOnlyFavorite}
            className="w-4 h-4 cursor-pointer"
            type="checkbox"
            checked={stateOfOnlyFavorite}
            style={
              stateOfOnlyFavorite ? {
                clipPath: "polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)",
                transformOrigin: "bottom left",
                appearance: "none",
                backgroundColor: "#007bff"
              } :
              { }
            }
          />
          <span>Only favorite</span>
        </label>
        <button
          onClick={handleResetFilters}
          className="px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-500 transition-colors duration-300 text-sm rounded-lg text-white"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;