import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar";

const SIDEBAR_WIDTH = 250;

const Header = () => {
  const navigate = useNavigate()
  return (
    <header
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    height: "60px",
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
    marginLeft: `${SIDEBAR_WIDTH}px`,
    backgroundColor: "#fabfa5",
    padding: "10px 20px",
    borderBottom: "1px solid #e6b99d",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    color: "black",
    zIndex: 1000
  }}
>
  <SearchBar />
  <img
    src="./login.png"        
    alt="Login"
    style={{
      width: "40px",         
      height: "40px",
      cursor: "pointer"
    }}
    onClick={() => navigate("/login")}
  />
</header>

  );
};

export default Header;
