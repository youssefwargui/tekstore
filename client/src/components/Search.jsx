import search from "../assets/search.png";
import { useState } from "react";

const Search = (props) => {
const [inputv, setinputv] = useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Looking for..."
        className="search"
        onChange={(e) => {
          setinputv(e.target.value);
        }}
      />
      <img src={search} alt="search" className="search-icon" 
      onClick={() => {
          props.search(inputv);
        }} />
    </div>
  );
};

export default Search;