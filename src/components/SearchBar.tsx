import React from "react";

const SearchBar = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="yyyyy"
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #ccc",
          borderRadius: "4px"
        }}
      />
    </div>
  );
};

export default SearchBar;
