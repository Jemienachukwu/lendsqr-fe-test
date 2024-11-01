import React, { useState } from "react";
import NavBar from "../navbar/Navbar";
import Sidebar from "../sideBar/Sidebar";

import "./style.scss";

const Layout = ({ children }: any) => {
  const [showSide, setShowSide] = useState(false);

  return (
    <div className="layout-container">
      <NavBar setShowSide={setShowSide} showSide={showSide} />
      <div className="body">
        <div className={showSide ? "sidebarContainer" : "sidebarContainer1"}>
          <Sidebar />
        </div>

        <div className="parentContainer">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
