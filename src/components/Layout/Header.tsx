import React from "react";
import SearchBar from "../SearchBar";

const SIDEBAR_WIDTH = 250;

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "60px",
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        marginLeft: `${SIDEBAR_WIDTH}px`,
        backgroundColor: "#fabfa5",   // ����� ����
        padding: "10px 20px",
        borderBottom: "1px solid #e6b99d",  // ��¦ ��ο� ��輱
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        color: "black",  // ������ �ؽ�Ʈ
        zIndex: 1000,
      }}
    >
      <SearchBar />
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
    </header>
  );
};

export default Header;
