import { Link } from "react-router-dom"

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
        // borderRight: "2px solid #e6b99d",  // ?ó¨Í∏? ?Ñ† ?†úÍ±?
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "20px", borderBottom: "2px solid #e6b99d" }}>
  <Link to="/">
    <img
      src="./Semi.png"
      alt="Semiwiki"
      style={{
        width: "120px",
        height: "auto"
      }}
    />
  </Link>
</div>


      {/* Î©îÎâ¥ Ïπ? */}
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

      {/* ?èÑÍµ? Ïπ? */}
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
