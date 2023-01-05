import React from "react";
import "./style.scss";
import lendsqr from "../../images/lendsqr.png";
import union from "../../images/Union.png";
import search from "./imgs/search.png";
import notification from "./imgs/notification.png";
import user from "./imgs/image 4.png";
import dropDown from "./imgs/dropDown.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar-main">
      <div className="firstContainer">
        <div className="navbar-logoContainer">
          <img src={union} alt="img" className="navbar-UnionLogo" />
          <img src={lendsqr} alt="img" className="navbar-LendsqrLogo" />
        </div>
        <div className="navbar-search">
          <input type="search" placeholder="Search for anything" />
          <div className="navbar-searchIcon">
            <img src={search} alt="search icon" />
          </div>
        </div>
      </div>
      <div className="navbar-utilities">
        <Link>Docs</Link>
        <img
          src={notification}
          alt="notification"
          className="navbar-notificationIcon"
        />
        <span className="navbar-userDetailsWraper">
          <img src={user} alt="user" className="navbar-userIcon" />
          <h3 className="navbar-userName">users name</h3>
          <img src={dropDown} alt="drop" className="navbar-dropDown" />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
