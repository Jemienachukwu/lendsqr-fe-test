import "./style.scss";
import { Link } from "react-router-dom";
const NavBar = ({ showSide, setShowSide }: any) => {
  return (
    <div className="navbar-main">
      <div className="logo-container">
        <div className="navbar-ham" onClick={() => setShowSide(!showSide)}>
          &#9776;
        </div>
        <div className="navbar-logo">
          <img src="/icons/logo.svg" alt="img" />
        </div>
      </div>

      <div className="navbar-utilities">
        <div className="navbar-search">
          <input type="search" placeholder="Search for anything" />
          <div className="navbar-searchIcon">
            <img src="/icons/search.svg" alt="search icon" />
          </div>
        </div>
        <div className="utilities">
          <Link to="#" className="navbar-docs">
            Docs
          </Link>
          <img
            src="/icons/notification.svg"
            alt="notification"
            className="navbar-notificationIcon"
          />
          <span className="navbar-userDetailsWrapper">
            <img
              src="/icons/userdp.svg"
              alt="user"
              className="navbar-userIcon"
            />
            <h3 className="navbar-userName">Adedeji</h3>
            <img
              src="/icons/dropdown.svg"
              alt="drop"
              className="navbar-dropDown"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
