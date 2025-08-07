import React from "react";

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      style={{
        padding: "8px",
        width: "300px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default SearchBar;
