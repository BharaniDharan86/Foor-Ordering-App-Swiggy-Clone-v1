import { useResCardContext } from "../contexts/RestaurantCardProvider";

/* eslint-disable react/prop-types */
const SearchBar = () => {
  const { setFoodData, setQuery, query } = useResCardContext();
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurant"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="top-rated-btn" onClick={setFoodData}>
        Top Rated
      </button>
    </div>
  );
};

export default SearchBar;
