import React, { useState } from "react";
import NavBar from "./Navbar/Navbar";
import Sidebar from "./sideBar/Sidebar";
import "../base.scss";

const Layout = ({ children }: any) => {
  const [showSide, setShowSide] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      <NavBar setShowSide={setShowSide} showSide={showSide} />
      <div style={{ display: "flex" }}>
        <div className={showSide ? "sidebarContainer" : "sidebarContainer1"}>
          <Sidebar />
        </div>
        <div className="parentContainer">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
