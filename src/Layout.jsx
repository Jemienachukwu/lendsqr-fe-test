import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import "./base.scss";

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <div style={{ display: "flex" }}>
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="parentContainer">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
