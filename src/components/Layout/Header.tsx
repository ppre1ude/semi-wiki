import React from "react";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f5f5f5",
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          한글을쓰는경우
        </div>

        <div style={{ marginLeft: "250px", flex: 1, display: "flex", justifyContent: "center" }}>
          <SearchBar />
        </div>

        <button
          style={{
            marginLeft: "20px",
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
