/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    props.onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Aradığınız ürünü yazınız."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
