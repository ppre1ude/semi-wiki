import React from "react";

const SIDEBAR_WIDTH = 250;

const Sidebar = () => {
  return (
    <aside
      style={{
        width: SIDEBAR_WIDTH,
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        backgroundColor: "#fabfa5",
        padding: "20px",
        boxSizing: "border-box",
        color: "black",
        display: "flex",
        flexDirection: "column",
        // borderRight: "2px solid #e6b99d",  // 여기 선 제거
      }}
    >
      {/* Semiwiki 로고 */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "20px",
          paddingBottom: "10px",
          borderBottom: "2px solid #e6b99d",
        }}
      >
        Semiwiki
      </div>

      {/* 메뉴 칸 */}
      <div
        style={{
          marginBottom: "40px",
          borderBottom: "1px solid #e6b99d",
          paddingBottom: "15px",
        }}
      >
        <h3>Menu</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
          <li>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: "5px 0",
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: "5px 0",
              }}
            >
              My Documents
            </button>
          </li>
          <li>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: "5px 0",
              }}
            >
              Favorites
            </button>
          </li>
        </ul>
      </div>

      {/* 도구 칸 */}
      <div>
        <h3>Tools</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
          <li>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: "5px 0",
              }}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: "5px 0",
              }}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "black",
                cursor: "pointer",
                padding: "5px 0",
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
