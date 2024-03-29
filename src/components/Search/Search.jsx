import React from "react";

const Search = ({search, setSearch, handleSearch}) => {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter city Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
