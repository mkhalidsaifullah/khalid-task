import React from "react";
import "./SearchBar.css";
const SearchBar = ({setSearchTerm}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-text"
      />
    </>
  );
};

export default SearchBar;
