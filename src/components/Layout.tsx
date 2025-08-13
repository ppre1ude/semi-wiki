import Header from "@/components/Layout/Header";
import Sidebar from "@/components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const SIDEBAR_WIDTH = 250;
const HEADER_HEIGHT = 60;

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main
        style={{
          marginLeft: SIDEBAR_WIDTH,
          paddingTop: HEADER_HEIGHT,
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
