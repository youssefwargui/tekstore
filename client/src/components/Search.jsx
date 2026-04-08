import search from "../assets/search.png";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Looking for..."
        className="search"
      />
      <img src={search} alt="search" className="search-icon" />
    </div>
  );
};

export default Search;