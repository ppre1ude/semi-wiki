import React from "react";

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "250px",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Menu Section */}
      <div style={{ marginBottom: "40px" }}>
        <h3>Menu</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li><button>Home</button></li>
          <li><button>My Documents</button></li>
          <li><button>Favorites</button></li>
        </ul>
      </div>

      {/* Tools Section */}
      <div>
        <h3>Tools</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li><button>Settings</button></li>
          <li><button>Profile</button></li>
          <li><button>Logout</button></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
