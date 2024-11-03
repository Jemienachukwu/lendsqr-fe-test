import React, { useState, ReactNode } from "react";
import NavBar from "../navbar/Navbar";
import Sidebar from "../sideBar/Sidebar";
import "./style.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showSide, setShowSide] = useState<boolean>(false);

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
