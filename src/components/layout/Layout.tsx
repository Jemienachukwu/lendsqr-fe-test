import React, { useState } from "react";
import NavBar from "../navbar/Navbar";
import Sidebar from "../sideBar/Sidebar";
// import Sidebar from "../sidebar/Sidebar";
import "./style.scss";

const Layout = ({ children }: any) => {
  const [showSide, setShowSide] = useState(false);

  return (
    <div style={{ height: "100vh", zIndex: "3" }}>
      <NavBar />
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
